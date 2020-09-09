import * as Joi from 'Joi';

export const createCommentValidator = Joi.object({
  text: Joi.string().max(4000).trim().required(),
  user_id: Joi.number().integer().positive().required(),
  client_id: Joi.number().integer().positive().required()
});
