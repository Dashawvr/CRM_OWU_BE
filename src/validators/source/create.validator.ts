import * as Joi from 'Joi';

import {sourceNameRegExp} from '../../constants';

export const createSourceValidator = Joi.object({
  name: Joi.string().regex(sourceNameRegExp).min(3).max(255).trim().required(),
  description: Joi.string().max(4000).trim()
});
