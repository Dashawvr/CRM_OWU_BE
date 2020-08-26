import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IClientFileModel {
  id: number;
  name: string;
  path: string;
  document_type: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IClientFile {
  id: number;
  name: string;
  path: string;
  document_type: string;
  client_id?: string;
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
    allowNull: false
  },
  document_type: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

export class ClientFile extends Model {
}

ClientFile.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.CLIENT_FILE_MODEL_NAME,
  tableName: DatabaseModelEnum.CLIENT_FILE_MODEL_NAME
});
