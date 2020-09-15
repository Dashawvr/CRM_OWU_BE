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
  email: Joi.string().regex(emailRegExp).trim().required(),
  phone: Joi.string().regex(onlyNumbersRegExp).max(10).trim(),
  status_id: Joi.number().integer().positive().required(),
  city_id: Joi.number().integer().positive(),
  group_id: Joi.number().integer().positive()
});
