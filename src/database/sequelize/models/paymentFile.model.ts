import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IPaymentFileModel {
  id: number;
  name: string;
  path: string;
  document_type: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IPaymentFile {
  id: number;
  name: string;
  path: string;
  document_type: string;
  payment_id?: string;
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
}

PaymentFile.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.PAYMENT_FILE_MODEL_NAME,
  tableName: DatabaseModelEnum.PAYMENT_FILE_MODEL_NAME
});
