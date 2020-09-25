import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class CourseOptionBuilder extends OptionBuilder {

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
}
