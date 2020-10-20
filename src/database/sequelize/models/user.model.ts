import {
  DataTypes,
  HasManyAddAssociationsMixin,
  HasManySetAssociationsMixin,
  Model,
  ModelAttributes
} from 'sequelize';

import {City, DBModelFieldInit} from '../models';
import {UserRole} from '../../../constants';
import {DatabaseModel} from '../constants';
import {HASH_PASSWORD_SYNC} from '../../../helpers';
import {sequelize} from '../../../configs';

export interface IUserModel {
  id: number
  email: string
  password: string
  name: string
  surname: string
  role: UserRole
  createdAt?: Date;
  updateAt?: Date;
}

export interface IUser extends User {
  cities?: Array<number>;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IUserModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
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
        UserRole.ROLE_MANAGER,
        UserRole.ROLE_ADMIN,
        UserRole.ROLE_SUPER_ADMIN
      ]
    }),
    defaultValue: UserRole.ROLE_MANAGER
  }
};

export class User extends Model {
  id!: number;
  email!: string;
  name!: string;
  password!: string;
  role!: UserRole;
  surname!: string;

  addCities!: HasManyAddAssociationsMixin<City, number>
  setCities!: HasManySetAssociationsMixin<City, number>
}

User.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.USER_MODEL_NAME,
  tableName: DatabaseModel.USER_MODEL_NAME
});

