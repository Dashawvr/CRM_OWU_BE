import * as Joi from 'Joi';

import {emailRegExp, onlyLettersRegExp, UserRole} from '../../constants';

export const updateUserValidator = Joi.object({
  email: Joi.string().regex(emailRegExp).trim(),
  password: Joi.string().min(8).max(20).trim(),
  name: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim(),
  surname: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim(),
  role: Joi.string().valid(
    UserRole.ROLE_SUPER_ADMIN,
    UserRole.ROLE_ADMIN,
    UserRole.ROLE_MANAGER
  ).trim(),
  cities: Joi.array().items(Joi.number().integer().positive())
});
