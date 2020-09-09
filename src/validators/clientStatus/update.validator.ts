import * as Joi from 'Joi';

import {clientStatusColorRegExp, clientStatusNameRegExp} from '../../constants';

export const updateClientStatusValidator = Joi.object({
  name: Joi.string().regex(clientStatusNameRegExp).min(3).max(255).trim(),
  color: Joi.string().regex(clientStatusColorRegExp).trim(),
  description: Joi.string().max(4000).trim()
});
