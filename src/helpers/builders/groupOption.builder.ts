import {Op} from 'sequelize';

import {IOptions} from '../../interfaces';

export class GroupOptionBuilder {
  private readonly _options: IOptions;

  constructor() {
    this._options = {
      where: {},
      limit: 25,
      offset: 0,
      order: [['createdAt', 'DESC']]
    };
  }

  name(name: string | undefined): GroupOptionBuilder {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  practiceFrom(practiceFrom: number | undefined): GroupOptionBuilder {
    if (practiceFrom) {
      this._options.where.practice = {
        [Op.gte]: practiceFrom
      };
    }

    return this;
  }

  practiceTo(practiceTo: number | undefined): GroupOptionBuilder {
    if (practiceTo) {
      this._options.where.practice = {
        [Op.lte]: practiceTo
      };
    }

    return this;
  }

  startDateFrom(startDateFrom: Date | undefined): GroupOptionBuilder {
    if (startDateFrom) {
      this._options.where.startDate = {
        [Op.gte]: startDateFrom
      };
    }

    return this;
  }

  startDateTo(startDateTo: Date | undefined): GroupOptionBuilder {
    if (startDateTo) {
      this._options.where.startDate = {
        [Op.lte]: startDateTo
      };
    }

    return this;
  }

  endDateFrom(endDateFrom: Date | undefined): GroupOptionBuilder {
    if (endDateFrom) {
      this._options.where.endDate = {
        [Op.gte]: endDateFrom
      };
    }

    return this;
  }

  endDateTo(endDateTo: Date | undefined): GroupOptionBuilder {
    if (endDateTo) {
      this._options.where.endDate = {
        [Op.lte]: endDateTo
      };
    }

    return this;
  }

  startTimeFrom(startTimeFrom: Date | undefined): GroupOptionBuilder {
    if (startTimeFrom) {
      this._options.where.startTime = {
        [Op.gte]: startTimeFrom
      };
    }

    return this;
  }

  startTimeTo(startTimeTo: Date | undefined): GroupOptionBuilder {
    if (startTimeTo) {
      this._options.where.startTime = {
        [Op.lte]: startTimeTo
      };
    }

    return this;
  }

  course_id(course_id: number | undefined): GroupOptionBuilder {
    if (course_id) {
      this._options.where.course_id = +course_id;
    }

    return this;
  }

  city_id(city_id: number | undefined): GroupOptionBuilder {
    if (city_id) {
      this._options.where.city_id = +city_id;
    }

    return this;
  }

  offset(pageIndex: number | undefined, pageSize: number | undefined): GroupOptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): GroupOptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): GroupOptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
