import {NextFunction, Response} from 'express';

import {IRequestExtended, ISourceUpdateFields} from '../../interfaces';
import {updateSourceValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateSourceValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as ISourceUpdateFields;

  const {error} = updateSourceValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
