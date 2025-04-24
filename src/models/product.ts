import { Table, Model, Column, DataType } from "sequelize-typescript";
import { Optional } from "sequelize";

export interface ProductAttributes {
  id: number;
  name: string;
  identifier: number;
  price: number;
  stock: number;
  category: string;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}
@Table({ tableName: "products" })
export class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column
  name!: string;

  @Column
  identifier!: number;

  @Column(DataType.FLOAT)
  price!: number;

  @Column
  stock!: number;

  @Column
  category!: string;
}
