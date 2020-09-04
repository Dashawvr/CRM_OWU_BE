import * as Joi from 'Joi';

export const updatePaymentValidator = Joi.object({
  number: Joi.number().integer().positive(),
  date: Joi.string().isoDate(),
  amount: Joi.number().integer().positive(),
  application_id: Joi.number().integer().positive(),
  status_id: Joi.number().integer().positive(),
  type_id: Joi.number().integer().positive()
});
