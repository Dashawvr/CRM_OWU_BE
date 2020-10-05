import {FileArray} from 'express-fileupload';
import {
  createWriteStream,
  existsSync,
  mkdirSync,
  readdirSync,
  rmdirSync,
  unlinkSync
} from 'fs';
import {join} from 'path';
import {v1} from 'uuid';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as vfsFonts from 'pdfmake/build/vfs_fonts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
pdfMake.vfs = vfsFonts.pdfMake.vfs;

import {IFileParams, IFileResponse} from '../../interfaces';
import {
  ApplicationFile,
  IApplication,
  IApplicationFile
} from '../../database';
import {ApplicationFileOptionBuilder, filesMv} from '../../helpers';
import {applicationContractTemplate} from '../../templates';
import {sequelize} from '../../configs';

class ApplicationFileService {

  async bulkCreate(application_id: number, {files}: FileArray): Promise<IApplicationFile[]> {
    const filesToSave: IApplicationFile[] = [];
    const path = `application/${application_id}/documents`;

    const data = Array.isArray(files) ? files : [files];

    data.forEach(file => {
      const extension = file.name.split('.').pop();
      const generatedName = `${v1()}.${extension}`;

      filesToSave.push({
        document_type: file.mimetype,
        name: file.name,
        path: `${path}/${generatedName}`,
        application_id
      });

      file.name = generatedName;
    });

    const savedFiles = await ApplicationFile.bulkCreate(filesToSave);

    if (savedFiles) {
      await filesMv(join(process.cwd(), 'static', path), files);
    }

    return savedFiles;
  }

  async delete({id, path, application_id}: IApplicationFile): Promise<number> {

    const countOfDeletedFiles = await ApplicationFile.destroy({
      where: {id}
    });

    if (countOfDeletedFiles) {
      unlinkSync(join(process.cwd(), 'static', path));
    }

    const files = readdirSync(join(process.cwd(), 'static', 'application', `${application_id}`, 'documents'));

    if (!files.length) {
      rmdirSync(join(process.cwd(), 'static', 'application', `${application_id}`), {recursive: true});
    }

    return countOfDeletedFiles;
  }

  getAll(params: IFileParams): Promise<IFileResponse<IApplicationFile>> {
    const {
      name,
      path,
      document_type,
      application_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new ApplicationFileOptionBuilder()
      .name(name)
      .path(path)
      .document_type(document_type)
      .application_id(application_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return ApplicationFile.findAndCountAll(options);
  }

  getById(id: number): Promise<IApplicationFile | null> {
    return ApplicationFile.findOne({
      where: {id}
    });
  }

  async generatePDFFile(application: IApplication): Promise<void> {
    const transaction = await sequelize.transaction();
    try {
      const fileName = `${v1()}.pdf`;
      const mimeType = 'application/pdf';

      const filePath = `application/${application.id}/documents/${fileName}`;
      const folderPath = join(process.cwd(), 'static', 'application', `${application.id}`, 'documents');

      const pdfDefinition = applicationContractTemplate.pdf(application);

      await ApplicationFile.create({
        path: filePath,
        name: fileName,
        document_type: mimeType,
        application_id: application.id
      }, {transaction});

      await transaction.commit();

      if (!existsSync(folderPath)) {
        mkdirSync(folderPath, {recursive: true});
      }

      const pdfDocument = pdfMake.createPdf(pdfDefinition);

      const stream = pdfDocument.getStream();

      await stream.pipe(createWriteStream(join(process.cwd(), 'static', filePath)));
      await stream.end();

    } catch (error) {
      await transaction.rollback();
    }

  }
}

export const applicationFileService = new ApplicationFileService();
