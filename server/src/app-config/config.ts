export const appConfig = {
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  DB_HOST: process.env.DB_HOST || 'homebudget-db',
  DB_PORT: parseInt(process.env.DB_PORT) || 5432,
  DB_NAME: process.env.DB_NAME || 'homebudget',
  DB_USER: process.env.DB_USER || 'homebudget_user',
  DB_PASSWORD: process.env.DB_PASSWORD || '12345',
};
