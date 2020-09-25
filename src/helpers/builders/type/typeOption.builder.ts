import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export abstract class TypeOptionBuilder extends OptionBuilder {

  name(name: string | undefined): this {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  description(description: string | undefined): this {
    if (description) {
      this._options.where.description = {
        [Op.substring]: description
      };
    }

    return this;
  }
}
