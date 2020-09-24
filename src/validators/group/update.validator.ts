import * as Joi from 'Joi';

import {timeRegExp} from '../../constants';

export const updateGroupValidator = Joi.object({
  name: Joi.string().min(3).max(100).trim(),
  practice: Joi.number().integer().positive(),
  startDate: Joi.string().isoDate(),
  endDate: Joi.string().isoDate(),
  startTime: Joi.string().regex(timeRegExp).trim(),
  clients: Joi.array().items(Joi.number().integer().positive()),
  course_id: Joi.number().integer().positive(),
  city_id: Joi.number().integer().positive()
});
