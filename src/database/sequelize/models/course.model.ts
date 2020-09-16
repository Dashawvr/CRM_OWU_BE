import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface ICourseModel {
  id: number;
  name: string;
  price: number;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ICourse {
  id: number;
  name: string;
  price: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<ICourseModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

export class Course extends Model {
  id!: number;
  name!: string;
  price!: number;
}

Course.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.COURSE_MODEL_NAME,
  tableName: DatabaseModel.COURSE_MODEL_NAME
});
