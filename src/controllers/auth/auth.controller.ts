import {NextFunction, Response} from 'express';

import {IAuthRequestExtended, IUserUpdateFields} from '../../interfaces';
import {IUser} from '../../database';
import {authService, emailService, userService} from '../../services';
import {UserAction} from '../../constants';
import {tokenizer} from '../../helpers';

class AuthController {

  async loginUser(req: IAuthRequestExtended, res: Response, next: NextFunction) {
    try {
      const {id: user_id} = req.user as IUser;

      const tokens = tokenizer(UserAction.AUTH);

      await authService.createAuthToken({
        ...tokens,
        user_id
      });

      res.json({
        data: tokens
      });

    } catch (error) {
      next(error);
    }
  }

  async logoutUser(req: IAuthRequestExtended, res: Response, next: NextFunction) {
    try {
      const access_token = req.access_token;

      if (access_token) {
        await authService.deleteAuthTokenByAccessToken(access_token);
      }

      res.end();

    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: IAuthRequestExtended, res: Response, next: NextFunction) {
    try {
      const {id} = req.user as IUser;
      const tokens = tokenizer(UserAction.AUTH);

      await authService.updateAuthTokenByUserId(id, tokens);

      res.json({
        data: tokens
      });

    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: IAuthRequestExtended, res: Response, next: NextFunction) {
    try {
      await emailService.forgotPassword(req.user as IUser);

      res.end();
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: IAuthRequestExtended, res: Response, next: NextFunction) {
    try {
      const user = req.user as IUser;
      const updateFields = req.body as IUserUpdateFields;

      await userService.update(user, updateFields);

      res.end();

    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
