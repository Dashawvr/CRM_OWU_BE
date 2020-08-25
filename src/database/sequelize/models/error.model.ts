import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IErrorModel {
  id: number;
  name: string;
  status: number;
  message: string;
  code?: number;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IError {
  id: number;
  name: string;
  status: number;
  message: string;
  code?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IErrorModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT
  },
  code: {
    type: DataTypes.INTEGER
  }
};

export class Error extends Model {
}

Error.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.ERROR_MODEL_NAME,
  tableName: DatabaseModel.ERROR_MODEL_NAME
});
