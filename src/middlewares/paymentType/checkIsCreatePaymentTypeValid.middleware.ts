import {NextFunction, Request, Response} from 'express';

import {IPaymentType} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createPaymentTypeValidator} from '../../validators';

export const checkIsCreatePaymentTypeValid = (req: Request, res: Response, next: NextFunction): void => {
  const paymentType = req.body as IPaymentType;

  const {error} = createPaymentTypeValidator.validate(paymentType);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
