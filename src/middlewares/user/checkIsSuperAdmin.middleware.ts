import {NextFunction, Response} from 'express';

import {IUserRequestExtended} from '../../interfaces';
import {ResponseStatusCodes, UserRole} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {IUser} from '../../database';

export const checkIsSuperAdmin = (req: IUserRequestExtended, res: Response, next: NextFunction): void => {

  const {role} = req.user as IUser;

  if (role !== UserRole.ROLE_SUPER_ADMIN) {
    return next(
      new ErrorHandler(
        ResponseStatusCodes.FORBIDDEN,
        errors.FORBIDDEN_NO_PERMISSION.message,
        errors.FORBIDDEN_NO_PERMISSION.code
      ));
  }
  next();
};
