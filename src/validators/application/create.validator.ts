import * as Joi from 'Joi';

export const createApplicationValidator = Joi.object({
  price: Joi.number().integer().positive().required(),
  leftToPay: Joi.number().integer().positive().required(),
  practice: Joi.boolean().truthy('1', 1).falsy('0', 0),
  laptop: Joi.boolean().truthy('1', 1).falsy('0', 0),
  city_id: Joi.number().integer().positive().required(),
  client_id: Joi.number().integer().positive().required(),
  course_id: Joi.number().integer().positive().required(),
  discount_id: Joi.number().integer().positive()
});
