import {NextFunction, Request, Response} from 'express';

import {ICityUpdateFields} from '../../interfaces';
import {updateCityValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateCityValid = (req: Request, res: Response, next: NextFunction): void => {
  const updateFields = req.body as ICityUpdateFields;

  const {error} = updateCityValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
