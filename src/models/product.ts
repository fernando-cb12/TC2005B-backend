import {
  Table,
  Model,
  Column,
  CreatedAt,
  DataType,
} from "sequelize-typescript";
import { Optional } from "sequelize";

export interface ProductAttributes {
  id: number;
  name: string;
  identifier: number;
  price: number;
  stock: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}
@Table({ tableName: "products" })
export class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  identifier!: number;

  @Column(DataType.FLOAT)
  price!: number;

  @Column
  stock!: number;
}
