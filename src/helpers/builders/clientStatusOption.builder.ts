import {Op} from 'sequelize';

import {IOptions} from '../../interfaces';

export class ClientStatusOptionBuilder {
  private readonly _options: IOptions;

  constructor() {
    this._options = {
      where: {},
      limit: 25,
      offset: 0,
      order: [['createdAt', 'DESC']]
    };
  }

  name(name: string | undefined): ClientStatusOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  color(color: string | undefined): ClientStatusOptionBuilder {
    if (color) {
      this._options.where.color = {
        [Op.substring]: color
      };
    }

    return this;
  }

  description(description: string | undefined): ClientStatusOptionBuilder {
    if (description) {
      this._options.where.description = {
        [Op.substring]: description
      };
    }

    return this;
  }

  offset(pageIndex: number | undefined, pageSize: number | undefined): ClientStatusOptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): ClientStatusOptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): ClientStatusOptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
