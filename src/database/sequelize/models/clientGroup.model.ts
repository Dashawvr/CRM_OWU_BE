import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IClientGroupModel {
  id: number;
}

export interface IClientGroup {
  id: number;
  client_id?: number;
  group_id?: number;
}

const modelAttributes: DBModelFieldInit<IClientGroupModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
};

export class ClientGroup extends Model {
}

ClientGroup.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.CLIENT_GROUP_MODEL_NAME,
  tableName: DatabaseModelEnum.CLIENT_GROUP_MODEL_NAME,
  timestamps: false
});
