import * as Joi from 'Joi';

export const createPaymentValidator = Joi.object({
  number: Joi.number().integer().positive().required(),
  date: Joi.string().isoDate().required(),
  amount: Joi.number().integer().positive().required(),
  application_id: Joi.number().integer().positive().required(),
  status_id: Joi.number().integer().positive().required(),
  type_id: Joi.number().integer().positive().required()
});
