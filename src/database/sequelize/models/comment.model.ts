import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface ICommentModel {
  id: number;
  text: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IComment {
  id: number;
  text: string;
  client_id?: number;
  user_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<ICommentModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

export class Comment extends Model {
}

Comment.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.COMMENT_MODEL_NAME,
  tableName: DatabaseModelEnum.COMMENT_MODEL_NAME
});
