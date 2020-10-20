import {IUserParams, IUserResponse, IUserUpdateFields} from '../../interfaces';
import {IUser, OAuthToken, ResetToken, User} from '../../database';
import {UserOptionBuilder} from '../../helpers';

class UserService {

  async create(user: IUser): Promise<IUser> {
    const {
      cities,
      ...createFields
    } = user;

    const savedUser = await User.create(createFields);

    if (cities) {
      await savedUser.addCities(cities);
    }

    return savedUser;
  }

  async update(user: IUser, updateFields: IUserUpdateFields): Promise<void> {
    const {
      cities,
      ...fields
    } = updateFields;

    await user.update(fields);

    if (cities) {
      await user.setCities(cities);
    }
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

  getByEmail(email: string): Promise<IUser | null> {
    return User.findOne({
      where: {email}
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

  getByResetToken(reset_token: string): Promise<IUser | null> {
    return User.findOne({
      include: {
        model: ResetToken,
        required: true,
        where: {
          reset_token
        }
      }
    });
  }
}

export const userService = new UserService();
