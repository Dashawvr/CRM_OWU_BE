import {config} from './config';
import {ErrorHandler, errors} from '../errors';
import {ResponseStatusCodesEnum} from '../constants/enums';

export const corsOptions = {
  origin: (origin: any, callback: CallableFunction) => {
    const whiteList = config.FRONTEND_URL.split(';');

    if (!whiteList.includes(origin)) {
      return callback(new ErrorHandler(
        ResponseStatusCodesEnum.FORBIDDEN,
        errors.CORS_NOT_ALLOWED.message,
        errors.CORS_NOT_ALLOWED.code
      ), false);
    }
    callback(null, true);
  }
};
