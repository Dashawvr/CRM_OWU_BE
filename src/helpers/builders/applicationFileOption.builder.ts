import {Op} from 'sequelize';

import {IOptions} from '../../interfaces';

export class ApplicationFileOptionBuilder {
  private readonly _options: IOptions;

  constructor() {
    this._options = {
      where: {},
      limit: 25,
      offset: 0,
      order: [['createdAt', 'DESC']]
    };
  }

  name(name: string | undefined): ApplicationFileOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  path(path: string | undefined): ApplicationFileOptionBuilder {
    if (path) {
      this._options.where.path = {
        [Op.substring]: path
      };
    }

    return this;
  }

  document_type(document_type: string | undefined): ApplicationFileOptionBuilder {
    if (document_type) {
      this._options.where.document_type = {
        [Op.substring]: document_type
      };
    }

    return this;
  }

  application_id(application_id: string | undefined): ApplicationFileOptionBuilder {
    if (application_id) {
      this._options.where.application_id = +application_id;
    }

    return this;
  }

  offset(pageIndex: number | undefined, pageSize: number | undefined): ApplicationFileOptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): ApplicationFileOptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): ApplicationFileOptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
