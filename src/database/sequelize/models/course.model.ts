import {DataTypes, Model, ModelAttributes} from 'sequelize';
import {Application, DBModelFieldInit, Group} from '../models';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum} from '../constants';

export interface ICourseModel {
  id: number;
  name: string;
  price: number;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ICourse {
  id: number;
  name: string;
  price: number;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<ICourseModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

export class Course extends Model {
}

Course.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModelEnum.COURSE_MODEL_NAME,
  tableName: DatabaseModelEnum.COURSE_MODEL_NAME
});

Course.hasMany(Application, {foreignKey: 'course_id'});
Course.hasMany(Group, {foreignKey: 'course_id'});
