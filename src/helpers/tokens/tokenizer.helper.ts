import * as jwt from 'jsonwebtoken';

import {config} from '../../configs';
import {ResponseStatusCodes, UserAction} from '../../constants';
import {ErrorHandler} from '../../errors';
import {IOAuthToken} from '../../database';

export const tokenizer = (method: UserAction): IOAuthToken => {

  switch (method) {
    case UserAction.AUTH:
      const access_token = jwt.sign({}, config.JWT_SECRET, {expiresIn: config.ACCESS_TOKEN_LIFETIME});
      const refresh_token = jwt.sign({}, config.JWT_REFRESH_SECRET, {expiresIn: config.REFRESH_TOKEN_LIFETIME});

      return {access_token, refresh_token};
    default:
      throw new ErrorHandler(ResponseStatusCodes.SERVER_ERROR, 'Wrong action type');
  }
};
