import {Op} from 'sequelize';

import {IOptions} from '../../interfaces';

export class CourseOptionBuilder {
  private readonly _options: IOptions;

  constructor() {
    this._options = {
      where: {},
      limit: 25,
      offset: 0,
      order: [['createdAt', 'DESC']]
    };
  }

  name(name: string | undefined): CourseOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  priceFrom(priceFrom: number | undefined): CourseOptionBuilder {
    if (priceFrom) {
      this._options.where.price = {
        [Op.gte]: priceFrom
      };
    }

    return this;
  }

  priceTo(priceTo: number | undefined): CourseOptionBuilder {
    if (priceTo) {
      this._options.where.price = {
        [Op.lte]: priceTo
      };
    }

    return this;
  }

  priceFromTo(priceFrom: number | undefined, priceTo: number | undefined): CourseOptionBuilder {
    if (priceFrom && priceTo) {
      this._options.where.price = {
        [Op.and]: [
          {[Op.gte]: priceFrom},
          {[Op.lte]: priceTo}
        ]
      };
    }

    return this;
  }

  offset(pageIndex: number | undefined, pageSize: number | undefined): CourseOptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): CourseOptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): CourseOptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
