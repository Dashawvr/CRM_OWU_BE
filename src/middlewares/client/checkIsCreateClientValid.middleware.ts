import {NextFunction, Request, Response} from 'express';

import {IClient} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createClientValidator} from '../../validators';

export const checkIsCreateClientValid = (req: Request, res: Response, next: NextFunction): void => {
  const client = req.body as IClient;

  const {error} = createClientValidator.validate(client);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
