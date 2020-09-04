import * as Joi from 'Joi';

import {paymentTypeColorRegExp, paymentTypeNameRegExp} from '../../constants';

export const createPaymentTypeValidator = Joi.object({
  name: Joi.string().regex(paymentTypeNameRegExp).min(3).max(255).trim().required(),
  color: Joi.string().regex(paymentTypeColorRegExp).trim().required(),
  description: Joi.string().max(4000).trim().required()
});
