import {OAuthToken, User} from '../../database';
import {IUser} from '../../database';
import {IUserResponse, IUserUpdateFields} from '../../interfaces';

class UserService {

  create(user: IUser): Promise<IUser> {
    return User.create(user) as unknown as Promise<IUser>;
  }

  update(id: number, updateFields: IUserUpdateFields): Promise<[number, IUser[]]> {
    return User.update(updateFields, {where: {id}}) as unknown as Promise<[number, IUser[]]>;
  }

  delete(id: number): Promise<number> {
    return User.destroy({where: {id}});
  }

  getAll(): Promise<IUserResponse> { //TODO params
    return User.findAndCountAll() as unknown as Promise<IUserResponse>;
  }

  getByLogin(login: string): Promise<IUser | null> {
    return User.findOne({
      where: {
        login
      }
    }) as Promise<IUser | null>;
  }

  getById(id: number): Promise<IUser | null> {
    return User.findOne({
      where: {id}
    }) as Promise<IUser | null>;
  }

  getByAccessToken(access_token: string): Promise<IUser | null> {
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

  getByRefreshToken(refresh_token: string): Promise<IUser | null> {
    return User.findOne({
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
