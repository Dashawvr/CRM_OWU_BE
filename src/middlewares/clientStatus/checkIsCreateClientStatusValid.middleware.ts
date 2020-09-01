import {NextFunction, Request, Response} from 'express';

import {IClientStatus} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createClientStatusValidator} from '../../validators';

export const checkIsCreateClientStatusValid = (req: Request, res: Response, next: NextFunction): void => {
  const clientStatus = req.body as IClientStatus;

  const {error} = createClientStatusValidator.validate(clientStatus);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
