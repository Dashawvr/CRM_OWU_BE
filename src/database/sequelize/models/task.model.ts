import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

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
  id!: number;
  title!: string;
  dateFrom!: Date;
  dateTo!: Date;
  important!: boolean;
  description!: string;
}

Task.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.TASK_MODEL_NAME,
  tableName: DatabaseModel.TASK_MODEL_NAME
});
