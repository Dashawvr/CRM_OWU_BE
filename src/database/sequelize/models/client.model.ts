import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {Application, ClientFile, ClientGroup, Comment, DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IClientModel {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  age: number;
  email: string;
  phone: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IClient {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  age: number;
  email: string;
  phone: string;
  status_id?: number;
  city_id?: number;
  group_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IClientModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  patronymic: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

export class Client extends Model {
}

Client.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.CLIENT_MODEL_NAME,
  tableName: DatabaseModelEnum.CLIENT_MODEL_NAME
});

Client.hasMany(Comment, {foreignKey: 'client_id'});
Client.hasMany(ClientFile, {foreignKey: 'client_id', onDelete: 'cascade'});
Client.hasMany(Application, {foreignKey: 'client_id', onDelete: 'cascade'});
Client.hasMany(ClientGroup, {foreignKey: 'client_id'});
