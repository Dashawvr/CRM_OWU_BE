import {NextFunction, Request, Response} from 'express';

import {IPayment} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createPaymentValidator} from '../../validators';

export const checkIsCreatePaymentValid = (req: Request, res: Response, next: NextFunction): void => {
  const payment = req.body as IPayment;

  const {error} = createPaymentValidator.validate(payment);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
