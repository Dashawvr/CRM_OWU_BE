import * as Joi from 'Joi';

import {clientStatusColorRegExp, clientStatusNameRegExp} from '../../constants';

export const createClientStatusValidator = Joi.object({
  name: Joi.string().regex(clientStatusNameRegExp).min(3).max(255).trim().required(),
  color: Joi.string().regex(clientStatusColorRegExp).trim().required(),
  description: Joi.string().max(4000).trim().required()
});
