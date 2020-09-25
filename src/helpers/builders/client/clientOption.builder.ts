import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class ClientOptionBuilder extends OptionBuilder {

  name(name: string | undefined): ClientOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  surname(surname: string | undefined): ClientOptionBuilder {
    if (surname) {
      this._options.where.surname = {
        [Op.substring]: surname
      };
    }

    return this;
  }

  patronymic(patronymic: string | undefined): ClientOptionBuilder {
    if (patronymic) {
      this._options.where.patronymic = {
        [Op.substring]: patronymic
      };
    }

    return this;
  }

  ageFrom(ageFrom: number | undefined): ClientOptionBuilder {
    if (ageFrom) {
      this._options.where.age = {
        [Op.gte]: ageFrom
      };
    }

    return this;
  }

  ageTo(ageTo: number | undefined): ClientOptionBuilder {
    if (ageTo) {
      this._options.where.age = {
        [Op.lte]: ageTo
      };
    }

    return this;
  }

  ageFromTo(ageFrom: number | undefined, ageTo: number | undefined): ClientOptionBuilder {
    if (ageFrom && ageTo) {
      this._options.where.age = {
        [Op.and]: [
          {[Op.gte]: ageFrom},
          {[Op.lte]: ageTo}
        ]
      };
    }

    return this;
  }

  email(email: string | undefined): ClientOptionBuilder {
    if (email) {
      this._options.where.email = {
        [Op.substring]: email
      };
    }

    return this;
  }

  phone(phone: string | undefined): ClientOptionBuilder {
    if (phone) {
      this._options.where.phone = {
        [Op.startsWith]: phone
      };
    }

    return this;
  }

  status_id(status_id: number | undefined): ClientOptionBuilder {
    if (status_id) {
      this._options.where.status_id = +status_id;
    }

    return this;
  }

  city_id(city_id: number | undefined): ClientOptionBuilder {
    if (city_id) {
      this._options.where.city_id = +city_id;
    }

    return this;
  }

  group_id(group_id: number | undefined): ClientOptionBuilder {
    if (group_id) {
      this._options.where.group_id = +group_id;
    }

    return this;
  }
}
