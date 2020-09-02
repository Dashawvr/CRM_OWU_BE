import * as Joi from 'Joi';

import {groupStartTimeRegExp} from '../../constants';

export const createGroupValidator = Joi.object({
  name: Joi.string().min(3).max(100).trim().required(),
  practice: Joi.number().integer().positive().required(),
  startDate: Joi.string().isoDate().required(),
  endDate: Joi.string().isoDate().required(),
  startTime: Joi.string().regex(groupStartTimeRegExp).required(),
  course_id: Joi.number().integer().positive().required(),
  city_id: Joi.number().integer().positive().required()
});
