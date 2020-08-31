import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit, Task} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface ITaskStatusModel {
  id: number;
  name: string;
  color: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ITaskStatus {
  id: number;
  name: string;
  color: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<ITaskStatusModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

export class TaskStatus extends Model {
  id!: number;
  name!: string;
  color!: string;
  description!: string;
}

TaskStatus.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.TASK_STATUS_MODEL_NAME,
  tableName: DatabaseModel.TASK_STATUS_MODEL_NAME
});

TaskStatus.hasMany(Task, {foreignKey: 'status_id'});
