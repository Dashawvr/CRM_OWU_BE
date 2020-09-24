import {rmdirSync} from 'fs';
import {join} from 'path';

import {IClientParams, IClientResponse, IClientUpdateFields} from '../../interfaces';
import {Client, IClient} from '../../database';
import {ClientOptionBuilder} from '../../helpers';

class ClientService {

  async create(client: IClient): Promise<IClient> {
    const {
      groups,
      ...createFields
    } = client;

    const savedClient = await Client.create(createFields);

    if (groups) {
      await savedClient.addGroups(groups);
    }

    return savedClient;
  }

  async update(client: IClient, updateFields: IClientUpdateFields): Promise<void> {
    const {
      groups,
      ...fields
    } = updateFields;

    await client.update(fields);

    if (groups) {
      await client.setGroups(groups);
    }
  }

  delete(id: number): Promise<number> {
    const path = join(process.cwd(), 'static', 'client', `${id}`);

    const countOfDeletedClients = Client.destroy({
      where: {id}
    });

    if (countOfDeletedClients) {
      rmdirSync(path, {recursive: true});
    }

    return countOfDeletedClients;
  }

  getAll(params: IClientParams): Promise<IClientResponse> {
    const {
      name,
      surname,
      patronymic,
      ageFrom,
      ageTo,
      email,
      phone,
      status_id,
      city_id,
      group_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new ClientOptionBuilder()
      .name(name)
      .surname(surname)
      .patronymic(patronymic)
      .ageFrom(ageFrom)
      .ageTo(ageTo)
      .ageFromTo(ageFrom, ageTo)
      .email(email)
      .phone(phone)
      .status_id(status_id)
      .city_id(city_id)
      .group_id(group_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return Client.findAndCountAll(options);
  }

  getById(id: number): Promise<IClient | null> {
    return Client.findOne({
      where: {id}
    });
  }
}

export const clientService = new ClientService();
