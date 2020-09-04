import {NextFunction, Request, Response} from 'express';

import {IDiscount} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createDiscountValidator} from '../../validators';

export const checkIsCreateDiscountValid = (req: Request, res: Response, next: NextFunction): void => {
  const discount = req.body as IDiscount;

  const {error} = createDiscountValidator.validate(discount);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
