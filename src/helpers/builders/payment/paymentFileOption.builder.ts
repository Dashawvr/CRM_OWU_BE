import {FileOptionBuilder} from '../file';

export class PaymentFileOptionBuilder extends FileOptionBuilder {

  payment_id(payment_id: string | undefined): this {
    if (payment_id) {
      this._options.where.payment_id = +payment_id;
    }

    return this;
  }
}
