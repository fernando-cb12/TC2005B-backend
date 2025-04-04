import { Router } from "express";
import {
  createSupplier,
  deleteSupplier,
  getAllSuppliers,
  getSupplierById,
  modifySupplier,
} from "../controllers/supplierController";

const supplierRouter: Router = Router();
supplierRouter.get("/", getAllSuppliers);
supplierRouter.get("/:id", getSupplierById);
supplierRouter.post("/", createSupplier);
supplierRouter.patch("/:id", modifySupplier);
supplierRouter.delete("/", deleteSupplier);

export default supplierRouter;
