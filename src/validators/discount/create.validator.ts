import * as Joi from 'Joi';

import {discountNameRegExp} from '../../constants';

export const createDiscountValidator = Joi.object({
  name: Joi.string().regex(discountNameRegExp).min(3).max(255).trim().required(),
  amount: Joi.number().integer().positive().required(),
  description: Joi.string().max(4000).trim()
});
