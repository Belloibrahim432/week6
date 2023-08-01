import {Sequelize} from "sequelize";

// to connect to the sqlite database
const db = new Sequelize("database", "", "", {
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: true
});

// export the db and import into app.ts
export default db;