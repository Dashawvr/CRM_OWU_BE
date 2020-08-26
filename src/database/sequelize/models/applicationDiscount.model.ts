import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {DBModelFieldInit} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface IApplicationDiscountModel {
  id: number;
}

export interface IApplicationDiscount {
  id: number;
  application_id?: number;
  discount_id?: number;
}

const modelAttributes: DBModelFieldInit<IApplicationDiscountModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
};

export class ApplicationDiscount extends Model {
}

ApplicationDiscount.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.APPLICATION_DISCOUNT_MODEL_NAME,
  tableName: DatabaseModelEnum.APPLICATION_DISCOUNT_MODEL_NAME,
  timestamps: false
});
