import {
  DataTypes,
  HasManyAddAssociationsMixin,
  HasManySetAssociationsMixin,
  Model,
  ModelAttributes
} from 'sequelize';

import {
  DBModelFieldInit,
  Discount,
  IClient,
  ICourse,
  Source
} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface IApplicationModel {
  id: number;
  price: number;
  leftToPay: number;
  practice: boolean;
  laptop: boolean;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IApplication extends Application {
  client?: IClient;
  course?: ICourse;
  sources?: Array<number>;
  discounts?: Array<number>;
  city_id?: number;
  client_id?: number;
  course_id?: number;
  discount_id?: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<IApplicationModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  leftToPay: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  practice: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  laptop: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  }
};

export class Application extends Model {
  id!: number;
  price!: number;
  leftToPay!: number;
  practice!: boolean;
  laptop!: boolean;

  addSources!: HasManyAddAssociationsMixin<Source, number>
  setSources!: HasManySetAssociationsMixin<Source, number>
  addDiscounts!: HasManyAddAssociationsMixin<Discount, number>
  setDiscounts!: HasManySetAssociationsMixin<Discount, number>
}

Application.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.APPLICATION_MODEL_NAME,
  tableName: DatabaseModel.APPLICATION_MODEL_NAME
});
