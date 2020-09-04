import {IDiscountParams, IDiscountResponse, IDiscountUpdateFields} from '../../interfaces';
import {Discount, IDiscount} from '../../database';
import {DiscountOptionBuilder} from '../../helpers';

class DiscountService {

  create(discount: IDiscount): Promise<IDiscount> {
    return Discount.create(discount);
  }

  update(id: number, updateFields: IDiscountUpdateFields): Promise<[number, IDiscount[]]> {
    return Discount.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return Discount.destroy({
      where: {id}
    });
  }

  getAll(params: IDiscountParams): Promise<IDiscountResponse> {
    const {
      name,
      description,
      amountFrom,
      amountTo,
      application_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new DiscountOptionBuilder()
      .name(name)
      .description(description)
      .amountFrom(amountFrom)
      .amountTo(amountTo)
      .amountFromTo(amountFrom, amountTo)
      .application_id(application_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return Discount.findAndCountAll(options);
  }

  getById(id: number): Promise<IDiscount | null> {
    return Discount.findOne({
      where: {id}
    });
  }
}

export const discountService = new DiscountService();
