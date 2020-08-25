import {NextFunction, Response} from 'express';

import {ResponseStatusCodesEnum, UserRoleEnum} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {IRequestExtended} from '../../interfaces';
import {IUser} from '../../database';

export const checkIsSuperAdmin = (req: IRequestExtended, res: Response, next: NextFunction): void => {

  const {role} = req.user as IUser;

  if (role !== UserRoleEnum.ROLE_SUPER_ADMIN) {
    return next(
      new ErrorHandler(
        ResponseStatusCodesEnum.FORBIDDEN,
        errors.FORBIDDEN_NO_PERMISSION.message,
        errors.FORBIDDEN_NO_PERMISSION.code
      ));
  }
  next();
};
