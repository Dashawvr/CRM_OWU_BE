import * as Joi from 'joi';

export const loginValidator = Joi.string().min(5).max(255).alphanum().trim().required();
