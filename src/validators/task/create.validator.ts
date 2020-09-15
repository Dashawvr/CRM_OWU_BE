import * as Joi from 'Joi';

import {onlyLettersRegExp} from '../../constants';

export const createTaskValidator = Joi.object({
  title: Joi.string().regex(onlyLettersRegExp).min(5).max(255).trim().required(),
  dateFrom: Joi.string().isoDate().trim(),
  dateTo: Joi.string().isoDate().trim(),
  important: Joi.boolean().truthy('1', 1).falsy('0', 0),
  description: Joi.string().max(4000).trim().required(),
  status_id: Joi.number().integer().positive().required(),
  user_id: Joi.number().integer().positive(),
  client_id: Joi.number().integer().positive()
});
