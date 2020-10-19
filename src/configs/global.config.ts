export const config = {
  PORT: process.env.PORT || '3000',
  HOST: process.env.HOST || 'http://localhost',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200',

  MORGAN_FORMAT: process.env.MORGAN_FORMAT || 'dev',

  CRON_JOB_PERIOD: process.env.CRON_JOB_PERIOD || '0 0 * * *',

  JWT_SECRET: process.env.JWT_SECRET || 'PJjBg4Jr6Bta295',
  ACCESS_TOKEN_LIFETIME: process.env.ACCESS_TOKEN_LIFETIME || '1h',

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'dnjK7KXJPzTV5kq',
  REFRESH_TOKEN_LIFETIME: process.env.REFRESH_TOKEN_LIFETIME || '30m',

  JWT_EMAIL_FORGOT_PASSWORD: process.env.JWT_EMAIL_FORGOT_PASSWORD || '2nP5Q^cGhevbNK',
  JWT_EMAIL_FORGOT_PASSWORD_LIFETIME: process.env.JWT_EMAIL_FORGOT_PASSWORD_LIFETIME || '10m',

  DATABASE_USER: process.env.DATABASE_USER || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'root',
  DATABASE_NAME: process.env.DATABASE_NAME || 'crm',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'gmail',
  EMAIL_USER: process.env.EMAIL_USER || 'test',
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || 'test'
};

