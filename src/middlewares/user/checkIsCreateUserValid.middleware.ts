import {NextFunction, Request, Response} from 'express';

import {ResponseStatusCodes} from '../../constants';
import {createUserValidator} from '../../validators';
import {ErrorHandler} from '../../errors';
import {IUser} from '../../database';

export const checkIsCreateUserValid = (req: Request, res: Response, next: NextFunction): void => {
  const user = req.body as IUser;

  const {error} = createUserValidator.validate(user);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
