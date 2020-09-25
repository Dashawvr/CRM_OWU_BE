import {Op} from 'sequelize';

import {IOptions} from '../../interfaces';

export class PaymentFileOptionBuilder {
  private readonly _options: IOptions;

  constructor() {
    this._options = {
      where: {},
      limit: 25,
      offset: 0,
      order: [['createdAt', 'DESC']]
    };
  }

  name(name: string | undefined): PaymentFileOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  path(path: string | undefined): PaymentFileOptionBuilder {
    if (path) {
      this._options.where.path = {
        [Op.substring]: path
      };
    }

    return this;
  }

  document_type(document_type: string | undefined): PaymentFileOptionBuilder {
    if (document_type) {
      this._options.where.document_type = {
        [Op.substring]: document_type
      };
    }

    return this;
  }

  payment_id(payment_id: string | undefined): PaymentFileOptionBuilder {
    if (payment_id) {
      this._options.where.payment_id = +payment_id;
    }

    return this;
  }

  offset(pageIndex: number | undefined, pageSize: number | undefined): PaymentFileOptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): PaymentFileOptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): PaymentFileOptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
