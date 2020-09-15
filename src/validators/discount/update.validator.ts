import * as Joi from 'Joi';

import {onlyLettersRegExp} from '../../constants';

export const updateDiscountValidator = Joi.object({
  name: Joi.string().regex(onlyLettersRegExp).min(3).max(255).trim(),
  amount: Joi.number().integer().positive(),
  description: Joi.string().max(4000).trim()
});
