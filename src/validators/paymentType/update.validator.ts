import * as Joi from 'Joi';

import {paymentTypeColorRegExp, paymentTypeNameRegExp} from '../../constants';

export const updatePaymentTypeValidator = Joi.object({
  name: Joi.string().regex(paymentTypeNameRegExp).min(3).max(255).trim(),
  color: Joi.string().regex(paymentTypeColorRegExp).trim(),
  description: Joi.string().max(4000).trim()
});
