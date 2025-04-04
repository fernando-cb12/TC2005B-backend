import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import { Product } from "../models/product";

const connection = new Sequelize({
  database: "Registec",
  dialect: "mysql",
  username: "admin",
  password: "",
  storage: ":memory:",
  models: [User],
});

async function connectionDB() {
  try {
    await connection.sync();
  } catch (e) {
    console.log(e);
  }
}

export default connectionDB;
