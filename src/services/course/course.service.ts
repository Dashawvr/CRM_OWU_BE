import {ICourseParams, ICourseResponse, ICourseUpdateFields} from '../../interfaces';
import {Course, ICourse} from '../../database';
import {CourseOptionBuilder} from '../../helpers';

class CourseService {

  create(course: ICourse): Promise<ICourse> {
    return Course.create(course);
  }

  update(id: number, updateFields: ICourseUpdateFields): Promise<[number, ICourse[]]> {
    return Course.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return Course.destroy({
      where: {id}
    });
  }

  getAll(params: ICourseParams): Promise<ICourseResponse> {
    const {
      name,
      priceFrom,
      priceTo,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new CourseOptionBuilder()
      .name(name)
      .priceFrom(priceFrom)
      .priceTo(priceTo)
      .priceFromTo(priceFrom, priceTo)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return Course.findAndCountAll(options);
  }

  getById(id: number): Promise<ICourse | null> {
    return Course.findOne({
      where: {id}
    });
  }
}

export const courseService = new CourseService();
