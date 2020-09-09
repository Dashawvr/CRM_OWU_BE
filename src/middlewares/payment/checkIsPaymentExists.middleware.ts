import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {IPayment} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {paymentService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsPaymentExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {payment_id} = req.params;

    const {error} = idValidator.validate(payment_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const payment = await paymentService.getById(+payment_id) as IPayment;

    if (!payment) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.payment = payment;
    next();

  } catch (error) {
    next(error);
  }
};
