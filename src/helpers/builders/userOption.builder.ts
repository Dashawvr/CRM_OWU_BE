import {Op} from 'sequelize';

import {IOptions} from '../../interfaces';

export class UserOptionBuilder {
  private readonly _options: IOptions;

  constructor() {
    this._options = {
      where: {},
      limit: 25,
      offset: 0,
      order: [['createdAt', 'DESC']]
    };
  }

  name(name: string | undefined): UserOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  surname(surname: string | undefined): UserOptionBuilder {
    if (surname) {
      this._options.where.surname = {
        [Op.substring]: surname
      };
    }

    return this;
  }

  role(role: string | undefined): UserOptionBuilder {
    if (role) {
      this._options.where.role = {
        [Op.startsWith]: role
      };
    }

    return this;
  }

  offset(pageIndex: number | undefined, pageSize: number | undefined): UserOptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): UserOptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): UserOptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
