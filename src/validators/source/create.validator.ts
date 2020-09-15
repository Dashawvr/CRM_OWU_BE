import * as Joi from 'Joi';

import {onlyLettersRegExp} from '../../constants';

export const createSourceValidator = Joi.object({
  name: Joi.string().regex(onlyLettersRegExp).min(3).max(255).trim().required(),
  description: Joi.string().max(4000).trim()
});
