import * as Joi from 'joi';

export const idValidator = Joi.number().integer().positive().required();
