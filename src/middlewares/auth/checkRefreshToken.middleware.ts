import {NextFunction, Response} from 'express';
import {VerifyErrors} from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';

import {config} from '../../configs';
import {ResponseStatusCodesEnum} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {IRequestExtended} from '../../interfaces';
import {userService} from '../../services';

export const checkRefreshToken = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<any> => {

  const refresh_token = req.get('Authorization') as string;

  if (!refresh_token) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, 'No token'));
  }

  jwt.verify(refresh_token, config.JWT_REFRESH_SECRET, (err: VerifyErrors | null) => {
    if (err) {
      return next(new ErrorHandler(ResponseStatusCodesEnum.FORBIDDEN, 'Bad_tokens'));
    }
  });
  const user = await userService.getUserByRefreshToken(refresh_token); // error oauth_token is not associated to user!

  if (!user) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, errors.NOT_FOUND_USER_NOT_PRESENT.message));
  }

  req.user = user;

  next();

};
