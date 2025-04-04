import { Table, Model, Column, CreatedAt } from "sequelize-typescript";
import { Optional } from "sequelize";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface userCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({ tableName: "users" })
export class User extends Model<UserAttributes, userCreationAttributes> {
  @Column
  name!: string;

  @Column
  emai?: string;

  @Column
  password!: string;

  @CreatedAt
  @Column
  createdAt!: Date;
}
