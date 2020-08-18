import {NextFunction, Response} from 'express';
import {verify, VerifyErrors} from 'jsonwebtoken';

import {config} from '../../configs';
import {ResponseStatusCodesEnum} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {IRequestExtended} from '../../interfaces';
import {userService} from '../../services';

export const checkAccessToken = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<any> => {

  const access_token = req.get('Authorization') as string;

  if (!access_token) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, 'No token'));
  }

  verify(access_token, config.JWT_SECRET, (err: VerifyErrors | null) => {
    if (err) {
      return next(new ErrorHandler(ResponseStatusCodesEnum.UNAUTHORIZED, 'Invalid token'));
    }
  });

  const user = await userService.getUserByAccessToken(access_token);

  if (!user) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, errors.NOT_FOUND_USER_NOT_PRESENT.message));
  }

  req.user = user;
  req.access_token = access_token;

  next();
};
