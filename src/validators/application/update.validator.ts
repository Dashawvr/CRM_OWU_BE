import * as Joi from 'Joi';

export const updateApplicationValidator = Joi.object({
  price: Joi.number().integer().positive(),
  leftToPay: Joi.number().integer().positive(),
  practice: Joi.boolean().strict(),
  laptop: Joi.boolean().strict(),
  city_id: Joi.number().integer().positive(),
  client_id: Joi.number().integer().positive(),
  course_id: Joi.number().integer().positive(),
  discount_id: Joi.number().integer().positive()
});
