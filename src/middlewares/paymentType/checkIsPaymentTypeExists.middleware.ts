import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {IPaymentType} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {paymentTypeService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsPaymentTypeExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {type_id} = req.body.type_id ? req.body : req.params;

    if (!type_id) {
      return next();
    }

    const {error} = idValidator.validate(+type_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const paymentType = await paymentTypeService.getById(+type_id) as IPaymentType;

    if (!paymentType) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.paymentType = paymentType;
    next();

  } catch (error) {
    next(error);
  }
};
