import {FileArray} from 'express-fileupload';
import {readdirSync, rmdirSync, unlinkSync} from 'fs';
import {join} from 'path';
import {v1} from 'uuid';

import {IClientFileParams, IClientFileResponse} from '../../interfaces';
import {ClientFileOptionBuilder, filesMv} from '../../helpers';
import {ClientFile, IClientFile} from '../../database';

class ClientFileService {

  async bulkCreate(client_id: number, {files}: FileArray): Promise<IClientFile[]> {
    const filesToSave: IClientFile[] = [];
    const path = join(`${process.cwd()}/static/client/${client_id}/documents`);

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
        client_id
      });

      file.name = generatedName;
    });

    const savedFiles = await ClientFile.bulkCreate(filesToSave);

    if (savedFiles) {
      await filesMv(path, files);
    }

    return savedFiles;
  }

  async delete({id, path, client_id}: IClientFile): Promise<number> {

    const countOfDeletedFiles = await ClientFile.destroy({
      where: {id}
    });

    if (countOfDeletedFiles) {
      unlinkSync(path);
    }

    const files = readdirSync(join(`${process.cwd()}/static/client/${client_id}/documents`));

    if (!files.length) {
      rmdirSync(join(`${process.cwd()}/static/client/${client_id}`), {recursive: true});
    }

    return countOfDeletedFiles;
  }

  getAll(params: IClientFileParams): Promise<IClientFileResponse> {
    const {
      name,
      path,
      document_type,
      client_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new ClientFileOptionBuilder()
      .name(name)
      .path(path)
      .document_type(document_type)
      .client_id(client_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return ClientFile.findAndCountAll(options);
  }

  getById(id: number): Promise<IClientFile | null> {
    return ClientFile.findOne({
      where: {id}
    });
  }
}

export const clientFileService = new ClientFileService();
