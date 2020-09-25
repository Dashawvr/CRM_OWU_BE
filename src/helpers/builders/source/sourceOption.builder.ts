import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class SourceOptionBuilder extends OptionBuilder {

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
}
