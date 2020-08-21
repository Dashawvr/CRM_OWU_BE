import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {Client, DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IClientStatusModel {
  id: number;
  name: string;
  color: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IClientStatus {
  id: number;
  name: string;
  color: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IClientStatusModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

export class ClientStatus extends Model {
}

ClientStatus.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.CLIENT_STATUS_MODEL_NAME,
  tableName: DatabaseModelEnum.CLIENT_STATUS_MODEL_NAME
});

ClientStatus.hasMany(Client, {foreignKey: 'status_id'});
