import * as Joi from 'Joi';

import {
  clientEmailRegExp,
  clientNameRegExp,
  clientPatronymicRegExp,
  clientPhoneRegExp,
  clientSurnameRegExp
} from '../../constants';

export const updateClientValidator = Joi.object({
  name: Joi.string().regex(clientNameRegExp).min(3).max(20).trim(),
  surname: Joi.string().regex(clientSurnameRegExp).min(10).max(50).trim(),
  patronymic: Joi.string().regex(clientPatronymicRegExp).min(10).max(50).trim(),
  age: Joi.number().integer().positive().min(5).max(100),
  email: Joi.string().regex(clientEmailRegExp).trim(),
  phone: Joi.string().regex(clientPhoneRegExp).trim(),
  status_id: Joi.number().integer().positive(),
  city_id: Joi.number().integer().positive(),
  group_id: Joi.number().integer().positive()
});
