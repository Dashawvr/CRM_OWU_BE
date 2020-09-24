import * as Joi from 'Joi';

import {timeRegExp} from '../../constants';

export const createGroupValidator = Joi.object({
  name: Joi.string().min(3).max(100).trim().required(),
  practice: Joi.number().integer().positive().required(),
  startDate: Joi.string().isoDate().required(),
  endDate: Joi.string().isoDate().required(),
  startTime: Joi.string().regex(timeRegExp).trim().required(),
  clients: Joi.array().items(Joi.number().integer().positive()),
  course_id: Joi.number().integer().positive().required(),
  city_id: Joi.number().integer().positive().required()
});
