import {Sequelize} from "sequelize";

// to connect to the sqlite database
const db = new Sequelize("database", "name", "password", {
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

// export the db and import into app.ts
export default db;