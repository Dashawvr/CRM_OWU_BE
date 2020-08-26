import * as Joi from 'Joi';

import {nameRegExp, surnameRegExp, UserRole} from '../../constants';

export const createUserValidator = Joi.object({
  login: Joi.string().min(5).max(255).alphanum().trim().required(),
  password: Joi.string().min(8).trim().required(),
  name: Joi.string().regex(nameRegExp).trim().required(),
  surname: Joi.string().regex(surnameRegExp).trim().required(),
  role: Joi.string().valid(
    UserRole.ROLE_SUPER_ADMIN,
    UserRole.ROLE_ADMIN,
    UserRole.ROLE_USER
  ).trim().required()
});
