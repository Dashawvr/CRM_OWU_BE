import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class DiscountOptionBuilder extends OptionBuilder {

  name(name: string | undefined): DiscountOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  description(description: string | undefined): DiscountOptionBuilder {
    if (description) {
      this._options.where.description = {
        [Op.substring]: description
      };
    }

    return this;
  }

  amountFrom(amountFrom: number | undefined): DiscountOptionBuilder {
    if (amountFrom) {
      this._options.where.amount = {
        [Op.gte]: amountFrom
      };
    }

    return this;
  }

  amountTo(amountTo: number | undefined): DiscountOptionBuilder {
    if (amountTo) {
      this._options.where.amount = {
        [Op.lte]: amountTo
      };
    }

    return this;
  }

  amountFromTo(amountFrom: number | undefined, amountTo: number | undefined): DiscountOptionBuilder {
    if (amountFrom && amountTo) {
      this._options.where.amount = {
        [Op.and]: [
          {[Op.gte]: amountFrom},
          {[Op.lte]: amountTo}
        ]
      };
    }

    return this;
  }

  application_id(application_id: number | undefined): DiscountOptionBuilder {
    if (application_id) {
      this._options.where.application_id = +application_id;
    }

    return this;
  }
}
