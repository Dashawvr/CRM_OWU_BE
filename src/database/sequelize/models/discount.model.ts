import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {ApplicationDiscount, DBModelFieldInit} from '../models';
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
    allowNull: false
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
}

Discount.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.DISCOUNT_MODEL_NAME,
  tableName: DatabaseModel.DISCOUNT_MODEL_NAME
});

Discount.hasMany(ApplicationDiscount, {foreignKey: 'discount_id'});
