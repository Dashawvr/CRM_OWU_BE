import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IClientFileModel {
  id: number;
  name: string;
  path: string;
  document_type: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IClientFile {
  id?: number;
  name: string;
  path: string;
  document_type: string;
  client_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IClientFileModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  document_type: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

export class ClientFile extends Model {
  id!: number;
  name!: string;
  path!: string;
  document_type!: string;
}

ClientFile.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.CLIENT_FILE_MODEL_NAME,
  tableName: DatabaseModel.CLIENT_FILE_MODEL_NAME
});
