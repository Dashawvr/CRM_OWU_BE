import {Includeable} from 'sequelize';
import {rmdirSync} from 'fs';
import {join} from 'path';

import {IPaymentParams, IPaymentResponse, IPaymentUpdateFields} from '../../interfaces';
import {IPayment, Payment} from '../../database';
import {PaymentOptionBuilder} from '../../helpers';

class PaymentService {

  create(payment: IPayment): Promise<IPayment> {
    return Payment.create(payment);
  }

  update(id: number, updateFields: IPaymentUpdateFields): Promise<[number, IPayment[]]> {
    return Payment.update(updateFields, {
      where: {id}
    });
  }

  async delete(id: number): Promise<number> {
    const path = join(process.cwd(), 'static', 'payment', `${id}`);

    const countOfDeletedPayments = await Payment.destroy({
      where: {id}
    });

    if (countOfDeletedPayments) {
      rmdirSync(path, {recursive: true});
    }

    return countOfDeletedPayments;
  }

  getAll(params: IPaymentParams): Promise<IPaymentResponse> {
    const {
      number,
      dateFrom,
      dateTo,
      amountFrom,
      amountTo,
      application_id,
      status_id,
      type_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new PaymentOptionBuilder()
      .number(number)
      .dateFrom(dateFrom)
      .dateTo(dateTo)
      .dateFromTo(dateFrom, dateTo)
      .amountFrom(amountFrom)
      .amountTo(amountTo)
      .amountFromTo(amountFrom, amountTo)
      .application_id(application_id)
      .status_id(status_id)
      .type_id(type_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return Payment.findAndCountAll(options);
  }

  getById(id: number, include?: Includeable | Includeable[]): Promise<IPayment | null> {
    return Payment.findOne({
      where: {id},
      include
    });
  }
}

export const paymentService = new PaymentService();
