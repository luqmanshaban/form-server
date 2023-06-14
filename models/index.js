import  Sequelize  from "sequelize";
import sequelize from '../config/db.js'

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;


import User from "./User.js";
db.User = User(sequelize, Sequelize);

export default db;