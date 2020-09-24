import * as Joi from 'Joi';

import {onlyLettersRegExp, UserRole} from '../../constants';

export const createUserValidator = Joi.object({
  login: Joi.string().min(5).max(255).alphanum().trim().required(),
  password: Joi.string().min(8).trim().required(),
  name: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim().required(),
  surname: Joi.string().regex(onlyLettersRegExp).min(3).max(50).trim().required(),
  role: Joi.string().valid(
    UserRole.ROLE_SUPER_ADMIN,
    UserRole.ROLE_ADMIN,
    UserRole.ROLE_MANAGER
  ).trim().required(),
  cities: Joi.array().items(Joi.number().integer().positive())
});
