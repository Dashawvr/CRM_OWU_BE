import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IResetTokenModel {
  id: number;
  reset_token: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IResetToken {
  id?: number;
  reset_token: string;
  user_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IResetTokenModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  reset_token: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

export class ResetToken extends Model {
  id!: number;
  reset_token!: string;
}

ResetToken.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.RESET_TOKEN_MODEL_NAME,
  tableName: DatabaseModel.RESET_TOKEN_MODEL_NAME
});

