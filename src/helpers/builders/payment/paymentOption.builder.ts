import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class PaymentOptionBuilder extends OptionBuilder {

  number(number: number | undefined): PaymentOptionBuilder {
    if (number) {
      this._options.where.number = +number;
    }

    return this;
  }

  dateFrom(dateFrom: Date | undefined): PaymentOptionBuilder {
    if (dateFrom) {
      this._options.where.date = {
        [Op.gte]: dateFrom
      };
    }

    return this;
  }

  dateTo(dateTo: Date | undefined): PaymentOptionBuilder {
    if (dateTo) {
      this._options.where.date = {
        [Op.lte]: dateTo
      };
    }

    return this;
  }

  dateFromTo(dateFrom: Date | undefined, dateTo: Date | undefined): PaymentOptionBuilder {
    if (dateFrom && dateTo) {
      this._options.where.date = {
        [Op.and]: [
          {[Op.gte]: dateFrom},
          {[Op.lte]: dateTo}
        ]
      };
    }

    return this;
  }

  amountFrom(amountFrom: number | undefined): PaymentOptionBuilder {
    if (amountFrom) {
      this._options.where.amount = {
        [Op.gte]: amountFrom
      };
    }

    return this;
  }

  amountTo(amountTo: number | undefined): PaymentOptionBuilder {
    if (amountTo) {
      this._options.where.amount = {
        [Op.lte]: amountTo
      };
    }

    return this;
  }

  amountFromTo(amountFrom: number | undefined, amountTo: number | undefined): PaymentOptionBuilder {
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

  application_id(application_id: number | undefined): PaymentOptionBuilder {
    if (application_id) {
      this._options.where.application_id = +application_id;
    }

    return this;
  }

  status_id(status_id: number | undefined): PaymentOptionBuilder {
    if (status_id) {
      this._options.where.status_id = +status_id;
    }

    return this;
  }

  type_id(type_id: number | undefined): PaymentOptionBuilder {
    if (type_id) {
      this._options.where.type_id = +type_id;
    }

    return this;
  }
}
