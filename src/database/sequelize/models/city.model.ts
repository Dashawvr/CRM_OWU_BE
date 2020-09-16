import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface ICityModel {
  id: number;
  name: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ICity {
  id: number;
  name: string;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<ICityModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
};

export class City extends Model {
  id!: number;
  name!: string;
}

City.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.CITY_MODEL_NAME,
  tableName: DatabaseModel.CITY_MODEL_NAME
});
