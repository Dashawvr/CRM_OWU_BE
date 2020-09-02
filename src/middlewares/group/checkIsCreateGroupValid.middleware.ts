import {NextFunction, Request, Response} from 'express';

import {IGroup} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createGroupValidator} from '../../validators';

export const checkIsCreateGroupValid = (req: Request, res: Response, next: NextFunction): void => {
  const group = req.body as IGroup;

  const {error} = createGroupValidator.validate(group);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
