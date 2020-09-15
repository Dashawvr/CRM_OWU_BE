import * as Joi from 'Joi';

export const createCourseValidator = Joi.object({
  name: Joi.string().min(3).max(100).trim().required(),
  price: Joi.number().integer().positive().required()
});
