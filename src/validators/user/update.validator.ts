import * as Joi from 'Joi';

import {onlyLettersRegExp, UserRole} from '../../constants';

export const updateUserValidator = Joi.object({
  login: Joi.string().min(5).max(255).alphanum().trim(),
  password: Joi.string().min(8).trim(),
  name: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim(),
  surname: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim(),
  role: Joi.string().valid(
    UserRole.ROLE_SUPER_ADMIN,
    UserRole.ROLE_ADMIN,
    UserRole.ROLE_MANAGER
  ).trim(),
  cities: Joi.array().items(Joi.number().integer().positive())
});
