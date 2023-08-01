"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// to connect to the sqlite database
const db = new sequelize_1.Sequelize("database", "", "", {
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: true
});
// export the db and import into app.ts
exports.default = db;
