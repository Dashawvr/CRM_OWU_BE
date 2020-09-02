import {NextFunction, Request, Response} from 'express';

import {ICity} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createCityValidator} from '../../validators';

export const checkIsCreateCityValid = (req: Request, res: Response, next: NextFunction): void => {
  const city = req.body as ICity;

  const {error} = createCityValidator.validate(city);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
