import {NextFunction, Response} from 'express';

import {UserActionEnum} from '../../constants';
import {tokenizer} from '../../helpers';
import {IRequestExtended} from '../../interfaces';
import {authService} from '../../services';
import {IUser} from '../../database/';

class AuthController {

  async loginUser(req: IRequestExtended, res: Response, next: NextFunction) {

    const {id: user_id} = req.user as IUser;

    const tokens = tokenizer(UserActionEnum.AUTH);

    await authService.createAuthToken({
      ...tokens,
      user_id
    });

    res.json({
      data: tokens
    });
  }

  async logoutUser(req: IRequestExtended, res: Response, next: NextFunction) {

    const access_token = req.access_token;

    if (access_token) {
      await authService.deleteAuthTokenByAccessToken(access_token);
    }

    res.end();
  }

  async refreshToken(req: IRequestExtended, res: Response, next: NextFunction) {
    const {id} = req.user as IUser;
    const tokens = tokenizer(UserActionEnum.AUTH);

    await authService.updateAuthTokenByUserId(id, tokens);

    res.json({
      data: tokens
    });
  }
}

export const authController = new AuthController();
