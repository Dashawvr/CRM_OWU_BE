import {
  ITypeParams,
  ITypeResponse,
  ITypeUpdateFields
} from '../../interfaces';
import {IPaymentType, PaymentType} from '../../database';
import {PaymentTypeOptionBuilder} from '../../helpers';

class PaymentTypeService {

  create(paymentType: IPaymentType): Promise<IPaymentType> {
    return PaymentType.create(paymentType);
  }

  update(id: number, updateFields: ITypeUpdateFields): Promise<[number, IPaymentType[]]> {
    return PaymentType.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return PaymentType.destroy({
      where: {id}
    });
  }

  getAll(params: ITypeParams): Promise<ITypeResponse<IPaymentType>> {
    const {
      name,
      description,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new PaymentTypeOptionBuilder()
      .name(name)
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
