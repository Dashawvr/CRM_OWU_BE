import {NextFunction, Response} from 'express';

import {IGroupUpdateFields, IRequestExtended} from '../../interfaces';
import {updateGroupValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateGroupValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IGroupUpdateFields;

  const {error} = updateGroupValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
