import * as Joi from 'Joi';

import {applicationLeftToPayRegExp, applicationPriceRegExp} from '../../constants';

export const createApplicationValidator = Joi.object({
  price: Joi.string().regex(applicationPriceRegExp).trim().required(),
  leftToPay: Joi.string().regex(applicationLeftToPayRegExp).trim().required(),
  practice: Joi.boolean().truthy('1').falsy('0'),
  laptop: Joi.boolean().truthy('1').falsy('0'),
  city_id: Joi.number().integer().positive().required(),
  client_id: Joi.number().integer().positive().required(),
  course_id: Joi.number().integer().positive().required(),
  discount_id: Joi.number().integer().positive()
});
