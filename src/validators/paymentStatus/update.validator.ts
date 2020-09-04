import * as Joi from 'Joi';

import {paymentStatusColorRegExp, paymentStatusNameRegExp} from '../../constants';

export const updatePaymentStatusValidator = Joi.object({
  name: Joi.string().regex(paymentStatusNameRegExp).min(3).max(255).trim(),
  color: Joi.string().regex(paymentStatusColorRegExp).trim(),
  description: Joi.string().max(4000).trim()
});
