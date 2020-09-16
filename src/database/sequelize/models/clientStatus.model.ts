import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IClientStatusModel {
  id: number;
  name: string;
  color: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IClientStatus {
  id: number;
  name: string;
  color: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IClientStatusModel> = {
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
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

export class ClientStatus extends Model {
  id!: number;
  name!: string;
  color!: string;
  description!: string;
}

ClientStatus.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.CLIENT_STATUS_MODEL_NAME,
  tableName: DatabaseModel.CLIENT_STATUS_MODEL_NAME
});
