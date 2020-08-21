import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {ApplicationSource, DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface ISourceModel {
  id: number;
  name: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ISource {
  id: number;
  name: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<ISourceModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

export class Source extends Model {
}

Source.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.SOURCE_MODEL_NAME,
  tableName: DatabaseModelEnum.SOURCE_MODEL_NAME
});

Source.hasMany(ApplicationSource, {foreignKey: 'source_id'});
