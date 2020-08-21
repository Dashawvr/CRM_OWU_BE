import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {ApplicationFile, Payment, DBModelFieldInit, ApplicationDiscount, ApplicationSource} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IApplicationModel {
  id: number;
  price: number;
  leftToPay: number;
  practice: boolean;
  laptop: boolean;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IApplication {
  id: number;
  price: number;
  leftToPay: number;
  practice: boolean;
  laptop: boolean;
  city_id?: number;
  client_id?: number;
  course_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IApplicationModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  leftToPay: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  practice: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  laptop: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  }
};

export class Application extends Model {
}

Application.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.APPLICATION_MODEL_NAME,
  tableName: DatabaseModelEnum.APPLICATION_MODEL_NAME
});

Application.hasMany(ApplicationFile, {foreignKey: 'application_id', onDelete: 'cascade'});
Application.hasMany(Payment, {foreignKey: 'application_id', onDelete: 'cascade'});
Application.hasMany(ApplicationDiscount, {foreignKey: 'application_id'});
Application.hasMany(ApplicationSource, {foreignKey: 'application_id'});
