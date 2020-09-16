import {NextFunction, Response} from 'express';

import {ISourceRequestExtended} from '../../interfaces';
import {ISource} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {sourceService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsSourceExists = async (req: ISourceRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {source_id} = req.params;

    if (!source_id) {
      return next();
    }

    const {error} = idValidator.validate(+source_id);

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
