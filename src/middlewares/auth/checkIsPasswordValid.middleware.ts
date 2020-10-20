import {NextFunction, Response} from 'express';

import {IUserRequestExtended} from '../../interfaces';
import {IUser} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {passwordValidator} from '../../validators';

export const checkIsPasswordValid = (req: IUserRequestExtended, res: Response, next: NextFunction): void => {
  const {password} = req.body as IUser;

  if (!password) {
    return next(
      new ErrorHandler(
        ResponseStatusCodes.BAD_REQUEST,
        errors.BAD_REQUEST_WRONG_PARAMS.message,
        errors.BAD_REQUEST_WRONG_PARAMS.code));
  }

  const {error} = passwordValidator.validate(password);

  if (error) {
    return next(
      new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
