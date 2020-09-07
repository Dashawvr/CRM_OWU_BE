import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {ApplicationSource, DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

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
  application_id?: number;
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
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

export class Source extends Model {
  id!: number;
  name!: string;
  description!: string;
}

Source.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.SOURCE_MODEL_NAME,
  tableName: DatabaseModel.SOURCE_MODEL_NAME
});

Source.hasMany(ApplicationSource, {foreignKey: 'source_id'});
