import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit, Task} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

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
}

TaskStatus.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.TASK_STATUS_MODEL_NAME,
  tableName: DatabaseModelEnum.TASK_STATUS_MODEL_NAME
});

TaskStatus.hasMany(Task, {foreignKey: 'status_id'});
