import {IOAuthToken, OAuthToken} from '../../database';
import {logger} from '../../loggers';

class AuthService {

  async createAuthToken(token: IOAuthToken): Promise<IOAuthToken | undefined> {
    try {
      return await OAuthToken.create(token) as unknown as Promise<IOAuthToken>;
    } catch (error) {
      logger.error(error);
    }
  }

  async deleteAuthTokenByAccessToken(access_token: string): Promise<number | undefined> {
    try {
      return await OAuthToken.destroy({
        where: {access_token}
      });
    } catch (error) {
      logger.error(error);
    }
  }

  async updateAuthTokenByUserId(user_id: number, tokens: IOAuthToken): Promise<[number, IOAuthToken[]] | undefined> {
    try {
      return await OAuthToken.update(tokens, {
        where: {user_id}
      }) as unknown as Promise<[number, IOAuthToken[]]>;
    } catch (error) {
      logger.error(error);
    }
  }
}

export const authService = new AuthService();
