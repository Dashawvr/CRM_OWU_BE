import * as Joi from 'Joi';

export const updateCourseValidator = Joi.object({
  name: Joi.string().min(3).max(100).trim(),
  price: Joi.number().integer().positive()
});
