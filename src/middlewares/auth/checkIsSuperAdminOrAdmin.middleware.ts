import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {ResponseStatusCodes, UserRole} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {IUser} from '../../database';

export const checkIsSuperAdminOrAdmin = (req: IRequestExtended, res: Response, next: NextFunction): void => {

  const {role} = req.authUser as IUser;

  if (role !== UserRole.ROLE_SUPER_ADMIN && role !== UserRole.ROLE_ADMIN) {
    return next(
      new ErrorHandler(
        ResponseStatusCodes.FORBIDDEN,
        errors.FORBIDDEN_NO_PERMISSION.message,
        errors.FORBIDDEN_NO_PERMISSION.code
      ));
  }
  next();
};
