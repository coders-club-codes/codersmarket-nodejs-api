require('dotenv').config();

module.exports = {
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
  define: {
    timestamps: false,
    underscored: false,
    underscoredAll: false,
  },
  logging: false,
};
