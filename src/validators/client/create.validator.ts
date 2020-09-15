import * as Joi from 'Joi';

import {
  emailRegExp,
  onlyLettersRegExp,
  onlyNumbersRegExp
} from '../../constants';

export const createClientValidator = Joi.object({
  name: Joi.string().regex(onlyLettersRegExp).min(3).max(20).trim().required(),
  surname: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim().required(),
  patronymic: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim(),
  age: Joi.number().integer().positive().min(5).max(100),
  email: Joi.string().regex(emailRegExp).trim().required(),
  phone: Joi.string().regex(onlyNumbersRegExp).max(10).trim().required(),
  status_id: Joi.number().integer().positive().required()
});
