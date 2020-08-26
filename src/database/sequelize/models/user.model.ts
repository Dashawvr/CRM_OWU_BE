import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {Comment, DBModelFieldInit, OAuthToken, Task, UserCity} from '../models';
import {sequelize} from '../../../configs';
import {UserRoleEnum} from '../../../constants';
import {HASH_PASSWORD_SYNC} from '../../../helpers';
import {DatabaseModelEnum} from '../constants';

export interface IUserModel {
  id: number
  login: string
  password: string
  name: string
  surname: string
  role: UserRoleEnum
  createdAt?: Date;
  updateAt?: Date;
}

export interface IUser {
  id: number
  login: string
  password: string
  name: string
  surname: string
  role: UserRoleEnum
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IUserModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  login: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    set(password: string) {
      this.setDataValue('password', HASH_PASSWORD_SYNC(password));
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM({
      values: [
        UserRoleEnum.ROLE_USER,
        UserRoleEnum.ROLE_ADMIN,
        UserRoleEnum.ROLE_SUPER_ADMIN
      ]
    }),
    defaultValue: UserRoleEnum.ROLE_USER
  }
};

export class User extends Model {
}

User.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.USER_MODEL_NAME,
  tableName: DatabaseModelEnum.USER_MODEL_NAME
});

User.hasMany(OAuthToken, {foreignKey: 'user_id', onDelete: 'cascade'});
User.hasMany(Task, {foreignKey: 'user_id'});
User.hasMany(Comment, {foreignKey: 'user_id', onDelete: 'cascade'});
User.hasMany(UserCity, {foreignKey: 'user_id'});
