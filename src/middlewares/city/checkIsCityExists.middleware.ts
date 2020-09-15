import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {ICity} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {cityService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsCityExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {city_id} = req.body.city_id ? req.body : req.params;

    if (!city_id) {
      return next();
    }

    const {error} = idValidator.validate(+city_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const city = await cityService.getById(+city_id) as ICity;

    if (!city) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.city = city;
    next();

  } catch (error) {
    next(error);
  }
};
