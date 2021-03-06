import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {DBModelFieldInit} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IDiscountModel {
  id: number;
  name: string;
  description: string;
  amount: number;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IDiscount {
  id: number;
  name: string;
  description: string;
  amount: number;
  application_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IDiscountModel> = {
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
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

export class Discount extends Model {
  id!: number;
  name!: string;
  description!: string;
  amount!: number;
}

Discount.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.DISCOUNT_MODEL_NAME,
  tableName: DatabaseModel.DISCOUNT_MODEL_NAME
});
