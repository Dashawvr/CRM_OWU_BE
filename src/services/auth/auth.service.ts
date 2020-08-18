import {IOAuthToken, OAuthToken} from '../../database';

class AuthService {

  createAuthToken(token: IOAuthToken): Promise<IOAuthToken> {
    return OAuthToken.create(token) as unknown as Promise<IOAuthToken>;
  }

  deleteAuthTokenByAccessToken(access_token: string): Promise<number> {
    return OAuthToken.destroy({
      where: {
        access_token
      }
    });
  }

  updateAuthTokenByUserId(user_id: number, tokens: IOAuthToken): Promise<[number, IOAuthToken[]]> {
    return OAuthToken.update(tokens, {where: {user_id}}) as unknown as Promise<[number, IOAuthToken[]]>; // TODO type error
  }
}

export const authService = new AuthService();
