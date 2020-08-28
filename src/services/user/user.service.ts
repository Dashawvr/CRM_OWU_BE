import {IUserParams, IUserResponse, IUserUpdateFields} from '../../interfaces';
import {IUser, OAuthToken, User} from '../../database';
import {UserOptionBuilder} from '../../helpers';
import {logger} from '../../loggers';

class UserService {

  async create(user: IUser): Promise<IUser | undefined> {
    try {
      return await User.create(user);
    } catch (error) {
      logger.error(error);
    }
  }

  async update(id: number, updateFields: IUserUpdateFields): Promise<[number, IUser[]] | undefined> {
    try {
      return await User.update(updateFields, {where: {id}});
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

  async getAll(params: IUserParams): Promise<IUserResponse | undefined> {
    try {
      const {
        name,
        surname,
        role,
        pageIndex,
        pageSize,
        order,
        sort
      } = params;

      const options = new UserOptionBuilder()
        .name(name)
        .surname(surname)
        .role(role)
        .offset(pageIndex, pageSize)
        .limit(pageSize)
        .order(sort, order)
        .build();

      return await User.findAndCountAll(options);
    } catch (error) {
      logger.error(error);
    }
  }

  async getByLogin(login: string): Promise<IUser | null | undefined> {
    try {
      return await User.findOne({
        where: {login}
      });
    } catch (error) {
      logger.error(error);
    }
  }

  async getById(id: number): Promise<IUser | null | undefined> {
    try {
      return await User.findOne({
        where: {id}
      });
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
      });
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
      });
    } catch (error) {
      logger.error(error);
    }

  }
}

export const userService = new UserService();
