import {NextFunction, Request, Response} from 'express';

import {IApplication} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createApplicationValidator} from '../../validators';

export const checkIsCreateApplicationValid = (req: Request, res: Response, next: NextFunction): void => {
  const application = req.body as IApplication;

  const {error} = createApplicationValidator.validate(application);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
