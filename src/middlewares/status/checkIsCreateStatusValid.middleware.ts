import {NextFunction, Request, Response} from 'express';

import {IStatus} from '../../interfaces';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createStatusValidator} from '../../validators';

export const checkIsCreateStatusValid = (req: Request, res: Response, next: NextFunction): void => {
  const status = req.body as IStatus;

  const {error} = createStatusValidator.validate(status);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
