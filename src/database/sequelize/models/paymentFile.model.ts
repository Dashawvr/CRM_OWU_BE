import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IPaymentFileModel {
  id: number;
  name: string;
  path: string;
  document_type: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IPaymentFile {
  id?: number;
  name: string;
  path: string;
  document_type: string;
  payment_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IPaymentFileModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  document_type: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

export class PaymentFile extends Model {
  id!: number;
  name!: string;
  path!: string;
  document_type!: string;
  payment_id?: number;
}

PaymentFile.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.PAYMENT_FILE_MODEL_NAME,
  tableName: DatabaseModel.PAYMENT_FILE_MODEL_NAME
});
