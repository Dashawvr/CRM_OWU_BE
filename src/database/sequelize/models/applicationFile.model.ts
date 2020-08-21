import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IApplicationFileModel {
  id: number;
  name: string;
  path: string;
  document_type: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IApplicationFile {
  id: number;
  name: string;
  path: string;
  document_type: string;
  application_id?: string;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IApplicationFileModel> = {
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

export class ApplicationFile extends Model {
}

ApplicationFile.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.APPLICATION_FILE_MODEL_NAME,
  tableName: DatabaseModelEnum.APPLICATION_FILE_MODEL_NAME
});
