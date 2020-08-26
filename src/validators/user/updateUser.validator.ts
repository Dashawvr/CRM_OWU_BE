import * as Joi from 'Joi';

import {nameRegExp, surnameRegExp, UserRole} from '../../constants';

export const updateUserValidator = Joi.object({
  login: Joi.string().min(5).max(255).alphanum().trim(),
  password: Joi.string().min(8).trim(),
  name: Joi.string().regex(nameRegExp).trim(),
  surname: Joi.string().regex(surnameRegExp).trim(),
  role: Joi.string().valid(
    UserRole.ROLE_SUPER_ADMIN,
    UserRole.ROLE_ADMIN,
    UserRole.ROLE_USER
  ).trim()
});
