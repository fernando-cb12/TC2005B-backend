import {
  createProduct,
  getProducts,
  getProductByCategory,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

import { Router } from "express";

const productRouter = Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.get("/:category", getProductByCategory);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
