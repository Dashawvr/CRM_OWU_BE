import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IPaymentModel {
  id: number;
  number: number;
  date: Date;
  amount: number;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IPayment {
  id: number;
  number: number;
  date: Date;
  amount: number;
  application_id?: number;
  status_id?: number;
  type_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IPaymentModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

export class Payment extends Model {
  id!: number;
  number!: number;
  date!: Date;
  amount!: number;
}

Payment.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.PAYMENT_MODEL_NAME,
  tableName: DatabaseModel.PAYMENT_MODEL_NAME
});
