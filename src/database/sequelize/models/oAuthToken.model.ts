import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IOauthTokenModel {
  id: number;
  access_token: string;
  refresh_token: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IOAuthToken {
  id?: number;
  access_token: string;
  refresh_token: string;
  user_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IOauthTokenModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  access_token: {
    type: DataTypes.STRING,
    allowNull: false
  },
  refresh_token: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

export class OAuthToken extends Model {
}

OAuthToken.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.OAUTH_TOKEN_MODEL_NAME,
  tableName: DatabaseModelEnum.OAUTH_TOKEN_MODEL_NAME
});

