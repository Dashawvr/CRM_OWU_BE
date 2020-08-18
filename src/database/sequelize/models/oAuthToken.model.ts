import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';
import {User} from './user.model';
import {DBModelFieldInit} from './dbStructure.model';

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
  modelName: DatabaseModelEnum.AUTH_TOKEN_MODEL_NAME
});

OAuthToken.belongsTo(User, {foreignKey: 'user_id'});

