import * as Joi from 'Joi';

export const updateCommentValidator = Joi.object({
  text: Joi.string().max(4000).trim().required()
});
