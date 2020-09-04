import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit, Payment} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IPaymentStatusModel {
  id: number;
  name: string;
  color: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IPaymentStatus {
  id: number;
  name: string;
  color: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IPaymentStatusModel> = {
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
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

export class PaymentStatus extends Model {
  id!: number;
  name!: string;
  color!: string;
  description!: string;
}

PaymentStatus.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.PAYMENT_STATUS_MODEL_NAME,
  tableName: DatabaseModel.PAYMENT_STATUS_MODEL_NAME
});

PaymentStatus.hasMany(Payment, {foreignKey: 'status_id'});
