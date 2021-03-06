import {NextFunction, Request, Response} from 'express';

import {ICommentUpdateFields} from '../../interfaces';
import {updateCommentValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateCommentValid = (req: Request, res: Response, next: NextFunction): void => {
  const updateFields = req.body as ICommentUpdateFields;

  const {error} = updateCommentValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
