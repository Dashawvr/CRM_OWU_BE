import * as Joi from 'Joi';

import {onlyLettersRegExp} from '../../constants';

export const updateSourceValidator = Joi.object({
  name: Joi.string().regex(onlyLettersRegExp).min(3).max(255).trim(),
  description: Joi.string().max(4000).trim(),
  application_id: Joi.number().integer().positive()
});
