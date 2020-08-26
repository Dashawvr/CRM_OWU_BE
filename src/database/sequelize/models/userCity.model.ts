import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IUserCityModel {
  id: number;
}

export interface IUserCity {
  id: number;
  user_id?: number;
  city_id?: number;
}

const modelAttributes: DBModelFieldInit<IUserCityModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
};

export class UserCity extends Model {
}

UserCity.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.USER_CITY_MODEL_NAME,
  tableName: DatabaseModel.USER_CITY_MODEL_NAME,
  timestamps: false
});
