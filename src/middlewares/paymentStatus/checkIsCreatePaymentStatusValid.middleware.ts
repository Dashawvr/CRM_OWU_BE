import {NextFunction, Request, Response} from 'express';

import {IPaymentStatus} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createPaymentStatusValidator} from '../../validators';

export const checkIsCreatePaymentStatusValid = (req: Request, res: Response, next: NextFunction): void => {
  const paymentStatus = req.body as IPaymentStatus;

  const {error} = createPaymentStatusValidator.validate(paymentStatus);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
