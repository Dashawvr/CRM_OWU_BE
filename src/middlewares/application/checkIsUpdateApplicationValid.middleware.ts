import {NextFunction, Request, Response} from 'express';

import {IApplicationUpdateFields} from '../../interfaces';
import {updateApplicationValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateApplicationValid = (req: Request, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IApplicationUpdateFields;

  const {error} = updateApplicationValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
