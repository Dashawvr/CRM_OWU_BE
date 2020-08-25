import {IOAuthToken, OAuthToken} from '../../database';

class AuthService {

  async createAuthToken(token: IOAuthToken): Promise<IOAuthToken | undefined> {
    try {
      return await OAuthToken.create(token) as unknown as Promise<IOAuthToken>;
    } catch (e) {
      // TODO error service
    }
  }

  async deleteAuthTokenByAccessToken(access_token: string): Promise<number | undefined> {
    try {
      return await OAuthToken.destroy({
        where: {access_token}
      });
    } catch (e) {
      // TODO error service
    }
  }

  async updateAuthTokenByUserId(user_id: number, tokens: IOAuthToken): Promise<[number, IOAuthToken[]] | undefined> {
    try {
      return await OAuthToken.update(tokens, {
        where: {user_id}
      }) as unknown as Promise<[number, IOAuthToken[]]>;
    } catch (e) {
      // TODO error service
    }

  }
}

export const authService = new AuthService();
