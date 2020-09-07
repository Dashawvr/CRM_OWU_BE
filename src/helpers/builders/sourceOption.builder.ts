import {Op} from 'sequelize';

import {IOptions} from '../../interfaces';

export class SourceOptionBuilder {
  private readonly _options: IOptions;

  constructor() {
    this._options = {
      where: {},
      limit: 25,
      offset: 0,
      order: [['createdAt', 'DESC']]
    };
  }

  name(name: string | undefined): SourceOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  description(description: string | undefined): SourceOptionBuilder {
    if (description) {
      this._options.where.description = {
        [Op.substring]: description
      };
    }

    return this;
  }

  application_id(application_id: number | undefined): SourceOptionBuilder {
    if (application_id) {
      this._options.where.application_id = +application_id;
    }

    return this;
  }

  offset(pageIndex: number | undefined, pageSize: number | undefined): SourceOptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): SourceOptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): SourceOptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
