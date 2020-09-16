import {
  IStatusParams,
  IStatusResponse,
  IStatusUpdateFields
} from '../../interfaces';
import {IPaymentStatus, PaymentStatus} from '../../database';
import {PaymentStatusOptionBuilder} from '../../helpers';

class PaymentStatusService {

  create(paymentStatus: IPaymentStatus): Promise<IPaymentStatus> {
    return PaymentStatus.create(paymentStatus);
  }

  update(id: number, updateFields: IStatusUpdateFields): Promise<[number, IPaymentStatus[]]> {
    return PaymentStatus.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return PaymentStatus.destroy({
      where: {id}
    });
  }

  getAll(params: IStatusParams): Promise<IStatusResponse<IPaymentStatus>> {
    const {
      name,
      color,
      description,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new PaymentStatusOptionBuilder()
      .name(name)
      .color(color)
      .description(description)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return PaymentStatus.findAndCountAll(options);
  }

  getById(id: number): Promise<IPaymentStatus | null> {
    return PaymentStatus.findOne({
      where: {id}
    });
  }
}

export const paymentStatusService = new PaymentStatusService();
