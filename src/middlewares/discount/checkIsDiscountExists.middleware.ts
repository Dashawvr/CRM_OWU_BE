import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {IDiscount} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {discountService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsDiscountExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {discount_id} = req.params;

    const {error} = idValidator.validate(discount_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.NOT_FOUND,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const discount = await discountService.getById(+discount_id) as IDiscount;

    if (!discount) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_DISCOUNT_NOT_PRESENT.message,
        errors.NOT_FOUND_DISCOUNT_NOT_PRESENT.code));
    }

    req.discount = discount;
    next();

  } catch (error) {
    next(error);
  }
};
