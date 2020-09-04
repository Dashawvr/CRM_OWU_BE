import * as Joi from 'Joi';

export const createApplicationValidator = Joi.object({
  price: Joi.number().integer().positive().required(),
  leftToPay: Joi.number().integer().positive().required(),
  practice: Joi.boolean().strict(),
  laptop: Joi.boolean().strict(),
  city_id: Joi.number().integer().positive().required(),
  client_id: Joi.number().integer().positive().required(),
  course_id: Joi.number().integer().positive().required(),
  discount_id: Joi.number().integer().positive()
});
