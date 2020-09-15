import * as Joi from 'Joi';

import {colorHexRegExp, onlyLettersRegExp} from '../../constants';

export const updateStatusValidator = Joi.object({
  name: Joi.string().regex(onlyLettersRegExp).min(5).max(255).trim(),
  color: Joi.string().regex(colorHexRegExp).min(4).max(7).trim(),
  description: Joi.string().max(4000).trim()
});
