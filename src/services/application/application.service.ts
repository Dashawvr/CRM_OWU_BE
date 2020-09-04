import {IApplicationParams, IApplicationResponse, IApplicationUpdateFields} from '../../interfaces';
import {Application, IApplication} from '../../database';
import {ApplicationOptionBuilder} from '../../helpers';

class ApplicationService {

  create(application: IApplication): Promise<IApplication> {
    return Application.create(application);
  }

  update(id: number, updateFields: IApplicationUpdateFields): Promise<[number, IApplication[]]> {
    return Application.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return Application.destroy({
      where: {id}
    });
  }

  getAll(params: IApplicationParams): Promise<IApplicationResponse> {
    const {
      priceFrom,
      priceTo,
      leftToPayFrom,
      leftToPayTo,
      practice,
      laptop,
      city_id,
      client_id,
      course_id,
      discount_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new ApplicationOptionBuilder()
      .priceFrom(priceFrom)
      .priceTo(priceTo)
      .priceFromTo(priceFrom, priceTo)
      .leftToPayFrom(leftToPayFrom)
      .leftToPayTo(leftToPayTo)
      .leftToPayFromTo(leftToPayFrom, leftToPayTo)
      .practice(practice)
      .laptop(laptop)
      .city_id(city_id)
      .client_id(client_id)
      .course_id(course_id)
      .discount_id(discount_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return Application.findAndCountAll(options);
  }

  getById(id: number): Promise<IApplication | null> {
    return Application.findOne({
      where: {id}
    });
  }
}

export const applicationService = new ApplicationService();
