import * as Joi from 'Joi';

import {UserRoleEnum} from '../../constants';
import {nameRegExp, surnameRegExp} from '../../constants';

export const createUserValidator = Joi.object({
  login: Joi.string().min(5).max(255).alphanum().trim().required(),
  password: Joi.string().min(8).trim().required(),
  name: Joi.string().regex(nameRegExp).trim().required(),
  surname: Joi.string().regex(surnameRegExp).trim().required(),
  role: Joi.string().valid(
    UserRoleEnum.ROLE_SUPER_ADMIN,
    UserRoleEnum.ROLE_ADMIN,
    UserRoleEnum.ROLE_USER
  ).trim().required()
});
