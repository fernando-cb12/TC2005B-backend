import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType,
} from "sequelize-typescript";
import { Optional } from "sequelize";

interface SupplierAttributes {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
}

interface SupplierCreationAttributes
  extends Optional<SupplierAttributes, "id"> {}
@Table({ tableName: "Suppliers" })
export class Supplier extends Model<
  SupplierAttributes,
  SupplierCreationAttributes
> {
  @Column
  name!: string;

  @Column(DataType.STRING)
  address!: string;

  @Column(DataType.STRING)
  phoneNumber!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
