import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Supplier } from "../models/supplier";

const connection = new Sequelize({
  database: "registec",
  dialect: "mysql",
  username: "root",
  password: "12345",
  models: [Supplier, User, Product],
});

async function connectionDB() {
  try {
    await connection.sync();
  } catch (e) {
    console.log(e);
  }
}

export default connectionDB;
