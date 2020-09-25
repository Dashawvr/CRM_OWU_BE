import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export class GroupOptionBuilder extends OptionBuilder {

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

  practiceFromTo(practiceFrom: number | undefined, practiceTo: number | undefined): GroupOptionBuilder {
    if (practiceFrom && practiceTo) {
      this._options.where.practice = {
        [Op.and]: [
          {[Op.gte]: practiceFrom},
          {[Op.lte]: practiceTo}
        ]
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

  startDateFromTo(startDateFrom: Date | undefined, startDateTo: Date | undefined): GroupOptionBuilder {
    if (startDateFrom && startDateTo) {
      this._options.where.startDate = {
        [Op.and]: [
          {[Op.gte]: startDateFrom},
          {[Op.lte]: startDateTo}
        ]
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

  endDateFromTo(endDateFrom: Date | undefined, endDateTo: Date | undefined): GroupOptionBuilder {
    if (endDateFrom && endDateTo) {
      this._options.where.endDate = {
        [Op.and]: [
          {[Op.gte]: endDateFrom},
          {[Op.lte]: endDateTo}
        ]
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

  startTimeFromTo(startTimeFrom: Date | undefined, startTimeTo: Date | undefined): GroupOptionBuilder {
    if (startTimeFrom && startTimeTo) {
      this._options.where.startTime = {
        [Op.and]: [
          {[Op.gte]: startTimeFrom},
          {[Op.lte]: startTimeTo}
        ]
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
}
