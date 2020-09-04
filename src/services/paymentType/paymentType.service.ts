import {
  IPaymentTypeParams,
  IPaymentTypeResponse,
  IPaymentTypeUpdateFields
} from '../../interfaces';
import {IPaymentType, PaymentType} from '../../database';
import {PaymentTypeOptionBuilder} from '../../helpers';

class PaymentTypeService {

  create(paymentType: IPaymentType): Promise<IPaymentType> {
    return PaymentType.create(paymentType);
  }

  update(id: number, updateFields: IPaymentTypeUpdateFields): Promise<[number, IPaymentType[]]> {
    return PaymentType.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return PaymentType.destroy({
      where: {id}
    });
  }

  getAll(params: IPaymentTypeParams): Promise<IPaymentTypeResponse> {
    const {
      name,
      color,
      description,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new PaymentTypeOptionBuilder()
      .name(name)
      .color(color)
      .description(description)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return PaymentType.findAndCountAll(options);
  }

  getById(id: number): Promise<IPaymentType | null> {
    return PaymentType.findOne({
      where: {id}
    });
  }
}

export const paymentTypeService = new PaymentTypeService();
