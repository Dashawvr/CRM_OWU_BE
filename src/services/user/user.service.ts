import {IUserParams, IUserResponse, IUserUpdateFields} from '../../interfaces';
import {IUser, OAuthToken, User} from '../../database';
import {UserOptionBuilder} from '../../helpers';

class UserService {

  create(user: IUser): Promise<IUser> {
    return User.create(user);
  }

  update(id: number, updateFields: IUserUpdateFields): Promise<[number, IUser[]]> {
    return User.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return User.destroy({
      where: {id}
    });
  }

  getAll(params: IUserParams): Promise<IUserResponse> {
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

    return User.findAndCountAll(options);
  }

  getByLogin(login: string): Promise<IUser | null> {
    return User.findOne({
      where: {login}
    });
  }

  getById(id: number): Promise<IUser | null> {
    return User.findOne({
      where: {id}
    });
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
    });
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
    });
  }
}

export const userService = new UserService();
