import {Op} from 'sequelize';

import {IOptions} from '../../interfaces';

export class ClientFileOptionBuilder {
  private readonly _options: IOptions;

  constructor() {
    this._options = {
      where: {},
      limit: 25,
      offset: 0,
      order: [['createdAt', 'DESC']]
    };
  }

  name(name: string | undefined): ClientFileOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  path(path: string | undefined): ClientFileOptionBuilder {
    if (path) {
      this._options.where.path = {
        [Op.substring]: path
      };
    }

    return this;
  }

  document_type(document_type: string | undefined): ClientFileOptionBuilder {
    if (document_type) {
      this._options.where.document_type = {
        [Op.substring]: document_type
      };
    }

    return this;
  }

  client_id(client_id: string | undefined): ClientFileOptionBuilder {
    if (client_id) {
      this._options.where.client_id = +client_id;
    }

    return this;
  }

  offset(pageIndex: number | undefined, pageSize: number | undefined): ClientFileOptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): ClientFileOptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): ClientFileOptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
