import {IClientFileParams, IClientFileResponse, IClientFileUpdateFields} from '../../interfaces';
import {ClientFile, IClientFile} from '../../database';
import {ClientFileOptionBuilder} from '../../helpers';

class ClientFileService {

  create(files: IClientFile[]): Promise<IClientFile[]> {
    return ClientFile.bulkCreate(files);
  }

  update(id: number, updateFields: IClientFileUpdateFields): Promise<[number, IClientFile[]]> {
    return ClientFile.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return ClientFile.destroy({
      where: {id}
    });
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
