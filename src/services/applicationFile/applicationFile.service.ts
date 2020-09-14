import {FileArray} from 'express-fileupload';
import {readdirSync, rmdirSync, unlinkSync} from 'fs';
import {join} from 'path';
import {v1} from 'uuid';

import {IApplicationFileParams, IApplicationFileResponse} from '../../interfaces';
import {ApplicationFileOptionBuilder, filesMv} from '../../helpers';
import {ApplicationFile, IApplicationFile} from '../../database';

class ApplicationFileService {

  async bulkCreate(application_id: number, {files}: FileArray): Promise<IApplicationFile[]> {
    const filesToSave: IApplicationFile[] = [];
    const path = join(`${process.cwd()}/static/application/${application_id}/documents`);

    if (!Array.isArray(files)) {
      files = [files];
    }

    files.forEach(file => {
      const extension = file.name.split('.').pop();
      const generatedName = `${v1()}.${extension}`;

      filesToSave.push({
        document_type: file.mimetype,
        name: file.name,
        path: join(`${path}/${generatedName}`),
        application_id
      });

      file.name = generatedName;
    });

    const savedFiles = await ApplicationFile.bulkCreate(filesToSave);

    if (savedFiles) {
      await filesMv(path, files);
    }

    return savedFiles;
  }

  async delete({id, path, application_id}: IApplicationFile): Promise<number> {

    const countOfDeletedFiles = await ApplicationFile.destroy({
      where: {id}
    });

    if (countOfDeletedFiles) {
      unlinkSync(path);
    }

    const files = readdirSync(join(`${process.cwd()}/static/application/${application_id}/documents`));

    if (!files.length) {
      rmdirSync(join(`${process.cwd()}/static/application/${application_id}`), {recursive: true});
    }

    return countOfDeletedFiles;
  }

  getAll(params: IApplicationFileParams): Promise<IApplicationFileResponse> {
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
}

export const applicationFileService = new ApplicationFileService();
