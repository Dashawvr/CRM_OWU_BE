import {rmdirSync} from 'fs';
import {join} from 'path';

import {IApplicationParams, IApplicationResponse, IApplicationUpdateFields} from '../../interfaces';
import {Application, IApplication} from '../../database';
import {ApplicationOptionBuilder} from '../../helpers';
import {Includeable} from 'sequelize';

class ApplicationService {

  async create(application: IApplication): Promise<IApplication> {
    const {
      sources,
      discounts,
      ...createFields
    } = application;

    const savedApplication = await Application.create(createFields);

    if (sources) {
      await savedApplication.addSources(sources);
    }

    if (discounts) {
      await savedApplication.addDiscounts(discounts);
    }

    return savedApplication;
  }

  async update(application: IApplication, updateFields: IApplicationUpdateFields): Promise<void> {
    const {
      sources,
      discounts,
      ...fields
    } = updateFields;

    await application.update(fields);

    if (sources) {
      await application.setSources(sources);
    }

    if (discounts) {
      await application.setDiscounts(discounts);
    }
  }

  async delete(id: number): Promise<number> {
    const path = join(process.cwd(), 'static', 'application', `${id}`);

    const countOfDeletedApplications = await Application.destroy({
      where: {id}
    });

    if (countOfDeletedApplications) {
      rmdirSync(path, {recursive: true});
    }

    return countOfDeletedApplications;
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

  getById(id: number, include?: Includeable | Includeable[]): Promise<IApplication | null> {
    return Application.findOne({
      where: {id},
      include
    });
  }
}

export const applicationService = new ApplicationService();
