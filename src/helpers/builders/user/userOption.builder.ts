import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class UserOptionBuilder extends OptionBuilder {

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
}
