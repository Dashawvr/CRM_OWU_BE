import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {ResponseStatusCodesEnum} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {CHECK_HASH} from '../../helpers';
import {IUser} from '../../database';

export const checkIsPasswordCorrect = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<any> => {

  const {password: hashPassword} = req.user as IUser;
  const {password} = req.body as IUser;

  const isPasswordCorrect = await CHECK_HASH(password, hashPassword);

  if (!isPasswordCorrect) {
    return next(
      new ErrorHandler(
        ResponseStatusCodesEnum.NOT_FOUND,
        errors.NOT_FOUND_USER_NOT_PRESENT.message,
        errors.NOT_FOUND_USER_NOT_PRESENT.code
      ));
  }

  next();
};
