"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// to connect to the sqlite database
<<<<<<< HEAD
const db = new sequelize_1.Sequelize("database", "", "", {
=======
const db = new sequelize_1.Sequelize("database", "name", "password", {
>>>>>>> 20051b0 (initial commit)
    dialect: "sqlite",
    storage: "./database.sqlite",
});
// export the db and import into app.ts
exports.default = db;
