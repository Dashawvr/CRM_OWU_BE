import {NextFunction, Request, Response} from 'express';

import {IType} from '../../interfaces';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createTypeValidator} from '../../validators';

export const checkIsCreateTypeValid = (req: Request, res: Response, next: NextFunction): void => {
  const type = req.body as IType;

  const {error} = createTypeValidator.validate(type);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
