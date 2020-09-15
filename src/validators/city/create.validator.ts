import * as Joi from 'Joi';

import {onlyLettersRegExp} from '../../constants';

export const createCityValidator = Joi.object({
  name: Joi.string().regex(onlyLettersRegExp).min(3).max(20).trim().required()
});
