import {
  IClientStatusParams,
  IClientStatusResponse,
  IClientStatusUpdateFields
} from '../../interfaces';
import {ClientStatus, IClientStatus} from '../../database';
import {ClientStatusOptionBuilder} from '../../helpers';

class ClientStatusService {

  create(clientStatus: IClientStatus): Promise<IClientStatus> {
    return ClientStatus.create(clientStatus);
  }

  update(id: number, updateFields: IClientStatusUpdateFields): Promise<[number, IClientStatus[]]> {
    return ClientStatus.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return ClientStatus.destroy({
      where: {id}
    });
  }

  getAll(params: IClientStatusParams): Promise<IClientStatusResponse> {
    const {
      name,
      color,
      description,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new ClientStatusOptionBuilder()
      .name(name)
      .color(color)
      .description(description)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return ClientStatus.findAndCountAll(options);
  }

  getById(id: number): Promise<IClientStatus | null> {
    return ClientStatus.findOne({
      where: {id}
    });
  }
}

export const clientStatusService = new ClientStatusService();
