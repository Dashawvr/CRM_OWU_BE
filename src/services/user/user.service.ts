import {IUserResponse, IUserUpdateFields} from '../../interfaces';
import {IUser, OAuthToken, User} from '../../database';
import {logger} from '../../loggers';

class UserService {

  async create(user: IUser): Promise<IUser | undefined> {
    try {
      return await User.create(user) as unknown as Promise<IUser>;
    } catch (error) {
      logger.error(error);
    }
  }

  async update(id: number, updateFields: IUserUpdateFields): Promise<[number, IUser[]] | undefined> {
    try {
      return await User.update(updateFields, {where: {id}}) as unknown as Promise<[number, IUser[]]>;
    } catch (error) {
      logger.error(error);
    }
  }

  async delete(id: number): Promise<number | undefined> {
    try {
      return await User.destroy({where: {id}});
    } catch (error) {
      logger.error(error);
    }
  }

  async getAll(): Promise<IUserResponse | undefined> { //TODO params
    try {
      return await User.findAndCountAll() as unknown as Promise<IUserResponse>;
    } catch (error) {
      logger.error(error);
    }
  }

  async getByLogin(login: string): Promise<IUser | null | undefined> {
    try {
      return await User.findOne({
        where: {login}
      }) as unknown as Promise<IUser | null>;
    } catch (error) {
      logger.error(error);
    }
  }

  async getById(id: number): Promise<IUser | null | undefined> {
    try {
      return await User.findOne({
        where: {id}
      }) as unknown as Promise<IUser | null>;
    } catch (error) {
      logger.error(error);
    }
  }

  async getByAccessToken(access_token: string): Promise<IUser | null | undefined> {
    try {
      return await User.findOne({
        include: {
          model: OAuthToken,
          required: true,
          where: {
            access_token
          }
        }
      }) as unknown as Promise<IUser | null>;
    } catch (error) {
      logger.error(error);
    }
  }

  async getByRefreshToken(refresh_token: string): Promise<IUser | null | undefined> {
    try {
      return await User.findOne({
        include: {
          model: OAuthToken,
          required: true,
          where: {
            refresh_token
          }
        }
      }) as unknown as Promise<IUser | null>;
    } catch (error) {
      logger.error(error);
    }

  }
}

export const userService = new UserService();
