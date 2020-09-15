import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {ClientGroup, DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IGroupModel {
  id: number;
  name: string;
  practice: number;
  startDate: Date;
  endDate: Date;
  startTime: Date;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IGroup {
  id: number;
  name: string;
  practice: number;
  startDate: Date;
  endDate: Date;
  startTime: Date;
  course_id?: number;
  city_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IGroupModel> = {
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
  practice: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false
  }
};

export class Group extends Model {
  id!: number;
  name!: string;
  practice!: number;
  startDate!: Date;
  endDate!: Date;
  startTime!: Date;
}

Group.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.GROUP_MODEL_NAME,
  tableName: DatabaseModel.GROUP_MODEL_NAME
});

Group.hasMany(ClientGroup, {foreignKey: 'group_id'});
