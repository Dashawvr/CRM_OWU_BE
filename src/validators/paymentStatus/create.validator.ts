import * as Joi from 'Joi';

import {paymentStatusColorRegExp, paymentStatusNameRegExp} from '../../constants';

export const createPaymentStatusValidator = Joi.object({
  name: Joi.string().regex(paymentStatusNameRegExp).min(3).max(255).trim().required(),
  color: Joi.string().regex(paymentStatusColorRegExp).trim().required(),
  description: Joi.string().max(4000).trim().required()
});
