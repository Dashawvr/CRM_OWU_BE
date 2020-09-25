import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class ApplicationOptionBuilder extends OptionBuilder {

  priceFrom(priceFrom: number | undefined): ApplicationOptionBuilder {
    if (priceFrom) {
      this._options.where.price = {
        [Op.gte]: priceFrom
      };
    }

    return this;
  }

  priceTo(priceTo: number | undefined): ApplicationOptionBuilder {
    if (priceTo) {
      this._options.where.price = {
        [Op.lte]: priceTo
      };
    }

    return this;
  }

  priceFromTo(priceFrom: number | undefined, priceTo: number | undefined): ApplicationOptionBuilder {
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

  leftToPayFrom(leftToPayFrom: number | undefined): ApplicationOptionBuilder {
    if (leftToPayFrom) {
      this._options.where.leftToPay = {
        [Op.gte]: leftToPayFrom
      };
    }

    return this;
  }

  leftToPayTo(leftToPayTo: number | undefined): ApplicationOptionBuilder {
    if (leftToPayTo) {
      this._options.where.leftToPay = {
        [Op.lte]: leftToPayTo
      };
    }

    return this;
  }

  leftToPayFromTo(leftToPayFrom: number | undefined, leftToPayTo: number | undefined): ApplicationOptionBuilder {
    if (leftToPayFrom && leftToPayTo) {
      this._options.where.leftToPay = {
        [Op.and]: [
          {[Op.gte]: leftToPayFrom},
          {[Op.lte]: leftToPayTo}
        ]
      };
    }

    return this;
  }

  practice(practice: number | undefined): ApplicationOptionBuilder {
    if (practice) {
      this._options.where.practice = +practice;
    }

    return this;
  }

  laptop(laptop: number | undefined): ApplicationOptionBuilder {
    if (laptop) {
      this._options.where.laptop = +laptop;
    }

    return this;
  }

  client_id(client_id: number | undefined): ApplicationOptionBuilder {
    if (client_id) {
      this._options.where.client_id = +client_id;
    }

    return this;
  }

  city_id(city_id: number | undefined): ApplicationOptionBuilder {
    if (city_id) {
      this._options.where.city_id = +city_id;
    }

    return this;
  }

  course_id(course_id: number | undefined): ApplicationOptionBuilder {
    if (course_id) {
      this._options.where.course_id = +course_id;
    }

    return this;
  }

  discount_id(discount_id: number | undefined): ApplicationOptionBuilder {
    if (discount_id) {
      this._options.where.discount_id = +discount_id;
    }

    return this;
  }
}
