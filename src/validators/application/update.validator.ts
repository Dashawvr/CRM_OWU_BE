import * as Joi from 'Joi';

export const updateApplicationValidator = Joi.object({
  price: Joi.number().integer().positive(),
  leftToPay: Joi.number().integer().positive(),
  practice: Joi.boolean().truthy('1', 1).falsy('0', 0),
  laptop: Joi.boolean().truthy('1', 1).falsy('0', 0),
  sources: Joi.array().items(Joi.number().integer().positive()),
  discounts: Joi.array().items(Joi.number().integer().positive()),
  city_id: Joi.number().integer().positive(),
  client_id: Joi.number().integer().positive(),
  course_id: Joi.number().integer().positive(),
  discount_id: Joi.number().integer().positive()
});
