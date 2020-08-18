import {OAuthToken, User} from '../../database';
import {IUser} from '../../database';

class UserService {

  getUserByLogin(login: string): Promise<IUser | null> {
    return User.findOne({
      where: {
        login
      }
    }) as Promise<IUser | null>;
  }

  getUserByAccessToken(access_token: string): Promise<IUser | null> {
    return User.findOne({
      include: {
        model: OAuthToken,
        required: true,
        where: {
          access_token
        }
      }
    }) as Promise<IUser | null>;
  }

  getUserByRefreshToken(refresh_token: string): Promise<IUser | null> {
    return User.findOne({ // error oauth_token is not associated to user!
      include: {
        model: OAuthToken,
        required: true,
        where: {
          refresh_token
        }
      }
    }) as Promise<IUser | null>;
  }
}

export const userService = new UserService();
