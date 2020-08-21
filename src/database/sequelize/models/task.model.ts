import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface ITaskModel {
  id: number;
  title: string;
  dateFrom: Date;
  dateTo: Date;
  important: boolean;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ITask {
  id: number;
  title: string;
  dateFrom: Date;
  dateTo: Date;
  important: boolean;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
  user_id?: number;
  status_id?: number;
  client_id?: number;
}

const modelAttributes: DBModelFieldInit<ITaskModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateFrom: {
    type: DataTypes.DATEONLY
  },
  dateTo: {
    type: DataTypes.DATEONLY
  },
  important: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

export class Task extends Model {
}

Task.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.TASK_MODEL_NAME,
  tableName: DatabaseModelEnum.TASK_MODEL_NAME
});
