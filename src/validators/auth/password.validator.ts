import * as Joi from 'joi';

export const passwordValidator = Joi.string().min(8).max(20).trim().required();
