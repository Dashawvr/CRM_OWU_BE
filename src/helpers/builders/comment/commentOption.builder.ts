import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class CommentOptionBuilder extends OptionBuilder {

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
}
