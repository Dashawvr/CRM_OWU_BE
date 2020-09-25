import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export abstract class StatusOptionBuilder extends OptionBuilder {

  name(name: string | undefined): this {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  color(color: string | undefined): this {
    if (color) {
      this._options.where.color = {
        [Op.substring]: color
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
