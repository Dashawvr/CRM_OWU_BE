import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IPaymentTypeModel {
  id: number;
  name: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IPaymentType {
  id: number;
  name: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IPaymentTypeModel> = {
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
    type: DataTypes.TEXT
  }
};

export class PaymentType extends Model {
  id!: number;
  name!: string;
  description!: string;
}

PaymentType.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.PAYMENT_TYPE_MODEL_NAME,
  tableName: DatabaseModel.PAYMENT_TYPE_MODEL_NAME
});
