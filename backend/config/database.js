module.exports = {
  development: {
    username: 'postgres',
    password: 'fidelito2U',
    database: 'twou',
    host: 'twou.c5doapu0dfmp.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    port: '5432'
  },
  production: process.env.DATABASE_URL
};