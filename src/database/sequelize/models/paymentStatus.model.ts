import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit, Payment} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

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

export class PaymentStatus extends Model {
}

PaymentStatus.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.PAYMENT_STATUS_MODEL_NAME,
  tableName: DatabaseModelEnum.PAYMENT_STATUS_MODEL_NAME
});

PaymentStatus.hasMany(Payment, {foreignKey: 'status_id'});
