import {Op} from 'sequelize';

import {IOptions} from '../../interfaces';

export class CommentOptionBuilder {
  private readonly _options: IOptions;

  constructor() {
    this._options = {
      where: {},
      limit: 25,
      offset: 0,
      order: [['createdAt', 'DESC']]
    };
  }

  text(text: string | undefined): CommentOptionBuilder {
    if (text) {
      this._options.where.text = {
        [Op.substring]: text
      };
    }

    return this;
  }

  client_id(client_id: number | undefined): CommentOptionBuilder {
    if (client_id) {
      this._options.where.client_id = +client_id;
    }

    return this;
  }

  user_id(user_id: number | undefined): CommentOptionBuilder {
    if (user_id) {
      this._options.where.user_id = +user_id;
    }

    return this;
  }

  offset(pageIndex: number | undefined, pageSize: number | undefined): CommentOptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): CommentOptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): CommentOptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
