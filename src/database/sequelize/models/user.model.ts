import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {
  Comment,
  DBModelFieldInit,
  OAuthToken,
  Task,
  UserCity
} from '../models';
import {UserRole} from '../../../constants';
import {DatabaseModel} from '../constants';
import {HASH_PASSWORD_SYNC} from '../../../helpers';
import {sequelize} from '../../../configs';

export interface IUserModel {
  id: number
  login: string
  password: string
  name: string
  surname: string
  role: UserRole
  createdAt?: Date;
  updateAt?: Date;
}

export interface IUser {
  id: number
  login: string
  password: string
  name: string
  surname: string
  role: UserRole
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
        UserRole.ROLE_USER,
        UserRole.ROLE_ADMIN,
        UserRole.ROLE_SUPER_ADMIN
      ]
    }),
    defaultValue: UserRole.ROLE_USER
  }
};

export class User extends Model {
}

User.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.USER_MODEL_NAME,
  tableName: DatabaseModel.USER_MODEL_NAME
});

User.hasMany(OAuthToken, {foreignKey: 'user_id', onDelete: 'cascade'});
User.hasMany(Task, {foreignKey: 'user_id'});
User.hasMany(Comment, {foreignKey: 'user_id', onDelete: 'cascade'});
User.hasMany(UserCity, {foreignKey: 'user_id'});

