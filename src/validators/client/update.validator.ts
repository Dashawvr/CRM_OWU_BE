import * as Joi from 'Joi';

import {
  emailRegExp,
  onlyLettersRegExp,
  onlyNumbersRegExp
} from '../../constants';

export const updateClientValidator = Joi.object({
  name: Joi.string().regex(onlyLettersRegExp).min(3).max(20).trim(),
  surname: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim(),
  patronymic: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim(),
  age: Joi.number().integer().positive().min(5).max(100),
  email: Joi.string().regex(emailRegExp).trim(),
  phone: Joi.string().regex(onlyNumbersRegExp).max(10).trim(),
  groups: Joi.array().items(Joi.number().integer().positive()),
  status_id: Joi.number().integer().positive()
});
