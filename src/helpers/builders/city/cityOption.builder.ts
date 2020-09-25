import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class CityOptionBuilder extends OptionBuilder {

  name(name: string | undefined): CityOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }
}
