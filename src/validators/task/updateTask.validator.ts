import * as Joi from 'Joi';

import {titleRegExp} from '../../constants';

export const updateTaskValidator = Joi.object({
  title: Joi.string().regex(titleRegExp).min(5).max(255).trim(),
  dateFrom: Joi.string().isoDate(),
  dateTo: Joi.string().isoDate(),
  important: Joi.boolean().strict(),
  description: Joi.string().max(4000).trim(),
  user_id: Joi.number().integer().positive(),
  status_id: Joi.number().integer().positive(),
  client_id: Joi.number().integer().positive()
});
