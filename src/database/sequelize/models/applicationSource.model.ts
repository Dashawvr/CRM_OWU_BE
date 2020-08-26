import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IApplicationSourceModel {
  id: number;
}

export interface IApplicationSource {
  id: number;
  application_id?: number;
  source_id?: number;
}

const modelAttributes: DBModelFieldInit<IApplicationSourceModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
};

export class ApplicationSource extends Model {
}

ApplicationSource.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.APPLICATION_SOURCE_MODEL_NAME,
  tableName: DatabaseModelEnum.APPLICATION_SOURCE_MODEL_NAME,
  timestamps: false
});
