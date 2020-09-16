import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IClientModel {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  age: number;
  email: string;
  phone: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IClient {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  age: number;
  email: string;
  phone: string;
  status_id?: number;
  city_id?: number;
  group_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IClientModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  patronymic: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
};

export class Client extends Model {
  id!: number;
  name!: string;
  surname!: string;
  patronymic!: string;
  age!: number;
  email!: string;
  phone!: string;
}

Client.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.CLIENT_MODEL_NAME,
  tableName: DatabaseModel.CLIENT_MODEL_NAME
});
