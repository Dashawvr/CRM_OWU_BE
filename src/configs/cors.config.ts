import {ResponseStatusCodes} from '../constants';
import {ErrorHandler, errors} from '../errors';
import {config} from './global.config';

export const corsOptions = {
  origin: (origin: any, callback: CallableFunction) => {
    const whiteList = config.FRONTEND_URL.split(';');

    if (!whiteList.includes(origin)) {
      return callback(new ErrorHandler(
        ResponseStatusCodes.FORBIDDEN,
        errors.CORS_NOT_ALLOWED.message,
        errors.CORS_NOT_ALLOWED.code
      ), false);
    }
    callback(null, true);
  }
};
