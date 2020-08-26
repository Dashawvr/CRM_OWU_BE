import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {Application, DBModelFieldInit, Group, UserCity} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

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
    allowNull: false
  }
};

export class City extends Model {
}

City.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.CITY_MODEL_NAME,
  tableName: DatabaseModelEnum.CITY_MODEL_NAME
});

City.hasMany(UserCity, {foreignKey: 'city_id'});
City.hasMany(Application, {foreignKey: 'city_id'});
City.hasMany(Group, {foreignKey: 'city_id'});
