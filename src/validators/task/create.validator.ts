import * as Joi from 'Joi';

import {titleRegExp} from '../../constants';

export const createTaskValidator = Joi.object({
  title: Joi.string().regex(titleRegExp).min(5).max(255).trim().required(),
  dateFrom: Joi.string().isoDate(),
  dateTo: Joi.string().isoDate(),
  important: Joi.boolean().strict(),
  description: Joi.string().max(4000).trim().required(),
  user_id: Joi.number().integer().positive(),
  status_id: Joi.number().integer().positive().required(),
  client_id: Joi.number().integer().positive()
});
