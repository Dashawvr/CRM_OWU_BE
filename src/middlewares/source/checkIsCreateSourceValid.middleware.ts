import {NextFunction, Request, Response} from 'express';

import {ISource} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createSourceValidator} from '../../validators';

export const checkIsCreateSourceValid = (req: Request, res: Response, next: NextFunction): void => {
  const source = req.body as ISource;

  const {error} = createSourceValidator.validate(source);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
