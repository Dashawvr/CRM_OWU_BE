import * as Joi from 'Joi';

import {fileOptions} from '../../configs';

export const createClientFileValidator = Joi.object({
  name: Joi.string().min(3).max(100).trim().required(),
  path: Joi.string().max(400).trim().required(),
  document_type: Joi.string().valid(fileOptions.DOCUMENT_MIMETYPES).trim().required(),
  client_id: Joi.number().integer().positive().required()
});
