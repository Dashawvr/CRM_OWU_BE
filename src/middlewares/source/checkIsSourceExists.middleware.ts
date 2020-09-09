import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {ISource} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {sourceService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsSourceExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {source_id} = req.params;

    const {error} = idValidator.validate(source_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const source = await sourceService.getById(+source_id) as ISource;

    if (!source) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.source = source;
    next();

  } catch (error) {
    next(error);
  }
};
