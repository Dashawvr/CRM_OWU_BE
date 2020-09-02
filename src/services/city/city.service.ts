import {ICityParams, ICityResponse, ICityUpdateFields} from '../../interfaces';
import {City, ICity} from '../../database';
import {CityOptionBuilder} from '../../helpers';

class CityService {

  create(city: ICity): Promise<ICity> {
    return City.create(city);
  }

  update(id: number, updateFields: ICityUpdateFields): Promise<[number, ICity[]]> {
    return City.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return City.destroy({
      where: {id}
    });
  }

  getAll(params: ICityParams): Promise<ICityResponse> {
    const {
      name,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new CityOptionBuilder()
      .name(name)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return City.findAndCountAll(options);
  }

  getById(id: number): Promise<ICity | null> {
    return City.findOne({
      where: {id}
    });
  }
}

export const cityService = new CityService();
