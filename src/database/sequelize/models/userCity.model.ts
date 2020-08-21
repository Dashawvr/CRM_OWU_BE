import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

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
  modelName: DatabaseModelEnum.USER_CITY_MODEL_NAME,
  tableName: DatabaseModelEnum.USER_CITY_MODEL_NAME,
  timestamps: false
});
