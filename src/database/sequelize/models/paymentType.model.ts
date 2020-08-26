import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit, Payment} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

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
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

export class PaymentType extends Model {
}

PaymentType.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.PAYMENT_TYPE_MODEL_NAME,
  tableName: DatabaseModelEnum.PAYMENT_TYPE_MODEL_NAME
});

PaymentType.hasMany(Payment, {foreignKey: 'type_id'});
