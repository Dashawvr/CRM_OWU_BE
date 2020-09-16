import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

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
  discount_id?: number;
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
  id!: number;
  price!: number;
  leftToPay!: number;
  practice!: boolean;
  laptop!: boolean;
}

Application.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.APPLICATION_MODEL_NAME,
  tableName: DatabaseModel.APPLICATION_MODEL_NAME
});
