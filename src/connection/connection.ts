import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import { Product } from "../models/product";

const connection = new Sequelize({
  database: "Registec",
  dialect: "postgres",
  username: "admin",
  password: "12345",
  storage: ":memory:",
  models: [User, Product],
});

async function connectionDB() {
  try {
    await connection.sync();
  } catch (e) {
    console.log(e);
  }
}

export default connectionDB;
