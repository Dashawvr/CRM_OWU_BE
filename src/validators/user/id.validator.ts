import * as Joi from 'joi';

import {idRegExp} from '../../constants';

export const idValidator = Joi.string().regex(idRegExp).trim().required();
