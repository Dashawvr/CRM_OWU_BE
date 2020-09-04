import * as Joi from 'Joi';

import {discountNameRegExp} from '../../constants';

export const updateDiscountValidator = Joi.object({
  name: Joi.string().regex(discountNameRegExp).min(3).max(255).trim(),
  amount: Joi.number().integer().positive(),
  description: Joi.string().max(4000).trim()
});
