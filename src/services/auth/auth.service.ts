import {Transaction} from 'sequelize/types/lib/transaction';

import {
  IOAuthToken,
  IResetToken,
  OAuthToken,
  ResetToken
} from '../../database';

class AuthService {

  createAuthToken(token: IOAuthToken): Promise<IOAuthToken> {
    return OAuthToken.create(token);
  }

  createResetToken(token: IResetToken, transaction?: Transaction): Promise<IResetToken> {
    return ResetToken.create(token, {transaction});
  }

  deleteAuthTokenByAccessToken(access_token: string): Promise<number> {
    return OAuthToken.destroy({
      where: {access_token}
    });

  }

  deleteAuthTokenByRefreshToken(refresh_token: string): Promise<number> {
    return OAuthToken.destroy({
      where: {refresh_token}
    });

  }

  updateAuthTokenByUserId(user_id: number, tokens: IOAuthToken): Promise<[number, IOAuthToken[]]> {
    return OAuthToken.update(tokens, {
      where: {user_id}
    });
  }
}

export const authService = new AuthService();
