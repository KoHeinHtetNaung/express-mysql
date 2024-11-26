export default {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "pass3022",
  DB: "shopdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// export const DB = "your-database-name";
// export const USER = "your-username";
// export const PASSWORD = "your-password";
// export const HOST = "localhost";
// export const dialect = "mysql";

// export const pool = {
//   max: 5,
//   min: 0,
//   acquire: 30000,
//   idle: 10000,
// };
