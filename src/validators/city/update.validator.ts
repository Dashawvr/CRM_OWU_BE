import * as Joi from 'Joi';

import {cityNameRegExp} from '../../constants';

export const updateCityValidator = Joi.object({
  name: Joi.string().regex(cityNameRegExp).min(3).max(20).trim()
});
