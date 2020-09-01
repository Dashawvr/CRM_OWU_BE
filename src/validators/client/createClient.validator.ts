import * as Joi from 'Joi';

import {
  clientEmailRegExp,
  clientNameRegExp,
  clientPatronymicRegExp,
  clientPhoneRegExp,
  clientSurnameRegExp
} from '../../constants';

export const createClientValidator = Joi.object({
  name: Joi.string().regex(clientNameRegExp).min(3).max(20).trim().required(),
  surname: Joi.string().regex(clientSurnameRegExp).min(3).max(50).trim().required(),
  patronymic: Joi.string().regex(clientPatronymicRegExp).min(3).max(50).trim(),
  age: Joi.number().integer().positive().min(5).max(100),
  email: Joi.string().regex(clientEmailRegExp).trim().required(),
  phone: Joi.string().regex(clientPhoneRegExp).trim().required()
});
