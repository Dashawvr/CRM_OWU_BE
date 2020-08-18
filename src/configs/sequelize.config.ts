import {Dialect, Sequelize} from 'sequelize';
import {config} from './index';

export const sequelize = new Sequelize(
  config.DATABASE_NAME,
  config.DATABASE_USER,
  config.DATABASE_PASSWORD,
  {
    dialect: (config.DATABASE_DIALECT as Dialect),
    host: config.DATABASE_HOST
  }
);
