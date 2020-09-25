import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class TaskOptionBuilder extends OptionBuilder {

  title(title: string | undefined): TaskOptionBuilder {
    if (title) {
      this._options.where.title = {
        [Op.substring]: title
      };
    }

    return this;
  }

  dateFrom(dateFrom: Date | undefined): TaskOptionBuilder {
    if (dateFrom) {
      this._options.where.dateFrom = {
        [Op.gte]: dateFrom
      };
    }

    return this;
  }

  dateTo(dateTo: Date | undefined): TaskOptionBuilder {
    if (dateTo) {
      this._options.where.dateTo = {
        [Op.lte]: dateTo
      };
    }

    return this;
  }

  important(important: number | undefined): TaskOptionBuilder {
    if (important) {
      this._options.where.important = +important;
    }

    return this;
  }

  description(description: string | undefined): TaskOptionBuilder {
    if (description) {
      this._options.where.description = {
        [Op.substring]: description
      };
    }

    return this;
  }

  user_id(user_id: number | undefined): TaskOptionBuilder {
    if (user_id) {
      this._options.where.user_id = +user_id;
    }

    return this;
  }

  status_id(status_id: number | undefined): TaskOptionBuilder {
    if (status_id) {
      this._options.where.status_id = +status_id;
    }

    return this;
  }

  client_id(client_id: number | undefined): TaskOptionBuilder {
    if (client_id) {
      this._options.where.client_id = +client_id;
    }

    return this;
  }
}
