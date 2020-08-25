import * as Joi from 'Joi';

import {UserRoleEnum} from '../../constants';
import {nameRegExp, surnameRegExp} from '../../constants';

export const updateUserValidator = Joi.object({
  login: Joi.string().min(5).max(255).alphanum().trim(),
  password: Joi.string().min(8).trim(),
  name: Joi.string().regex(nameRegExp).trim(),
  surname: Joi.string().regex(surnameRegExp).trim(),
  role: Joi.string().valid(
    UserRoleEnum.ROLE_SUPER_ADMIN,
    UserRoleEnum.ROLE_ADMIN,
    UserRoleEnum.ROLE_USER
  ).trim()
});
