import {IOAuthToken, OAuthToken} from '../../database';

class AuthService {

  createAuthToken(token: IOAuthToken): Promise<IOAuthToken> {
    return OAuthToken.create(token);
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
