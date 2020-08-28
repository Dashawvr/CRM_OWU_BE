import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {ResponseStatusCodes, UserAction} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {IUser} from '../../database';
import {roleVerification} from '../../helpers';

export const checkDeleteRule = (req: IRequestExtended, res: Response, next: NextFunction): void => {

  const {role} = req.authUser as IUser;
  const {role: createdUserRole} = req.user as IUser;

  const rules = roleVerification(UserAction.DELETE_USER, role);

  if (!rules.includes(createdUserRole)) {
    return next(
      new ErrorHandler(
        ResponseStatusCodes.FORBIDDEN,
        errors.FORBIDDEN_NO_PERMISSION.message,
        errors.FORBIDDEN_NO_PERMISSION.code
      ));
  }
  next();
};
