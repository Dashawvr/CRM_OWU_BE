import {RateLimitEnum} from '../constants';

export const config = {
  PORT: process.env.PORT || '3000',
  HOST: process.env.HOST || 'http://localhost',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200',

  MORGAN_FORMAT: process.env.MORGAN_FORMAT || 'dev',

  ALLOW_ORIGIN: process.env.ALLOW_ORIGIN || 'http://localhost:4200',
  CRON_JOB_PERIOD: process.env.CRON_JOB_PERIOD || '0 0 * * *',

  JWT_SECRET: process.env.JWT_SECRET || 'PJjBg4Jr6Bta295',
  JWT_SECRET_ADMIN: process.env.JWT_SECRET_ADMIN || 'z2EVbEP8xePbzrU',
  ACCESS_TOKEN_LIFETIME: process.env.ACCESS_TOKEN_LIFETIME || '1h',

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'dnjK7KXJPzTV5kq',
  JWT_REFRESH_SECRET_ADMIN: process.env.JWT_REFRESH_SECRET_ADMIN || 'pWf4tEBXjazJsft',
  REFRESH_TOKEN_LIFETIME: process.env.REFRESH_TOKEN_LIFETIME || '30m',

  DATABASE_USER: process.env.DATABASE_USER || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'root',
  DATABASE_NAME: process.env.DATABASE_NAME || 'crm',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  SERVER_RATE_LIMIT: {
    windowMs: RateLimitEnum.MINUTES * RateLimitEnum.SECONDS * RateLimitEnum.MILLISECONDS,
    max: 1000
  },
  SEQUELIZE_SYNC_OPTIONS: {
    alter: true
  }
};

