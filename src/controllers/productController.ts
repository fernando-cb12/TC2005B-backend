import e, { Request, RequestHandler, Response } from "express";
import { Product } from "../models/product";

const createProduct: RequestHandler = (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content cannot be empty!",
      payload: null,
    });
  }
  const product = { ...req.body };
  Product.create(product)
    .then((data) => {
      res.status(201).json({
        status: "success",
        message: "Product created successfully",
        payload: data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Error creating products",
        payload: error,
      });
    });
};

const getProducts: RequestHandler = (req: Request, res: Response) => {
  Product.findAll()
    .then((data: Product[]) => {
      res.status(200).json({
        status: "success",
        message: "Product retrieved successfully",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error retrieving products",
        payload: err,
      });
    });
};

const getProductByCategory: RequestHandler = (req: Request, res: Response) => {
  Product.findAll({ where: { category: req.params.category } })
    .then((data: Product[]) => {
      return res.status(200).json({
        status: "success",
        message: "Product retrieved successfully",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error retrieving products",
        payload: err,
      });
    });
};

const updateProduct: RequestHandler = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({
      status: "error",
      message: "Invalid product ID",
      payload: null,
    });
    return;
  }
  const { id: _, ...data } = req.body;

  console.log("Updating product with ID:", id);
  console.log("Data to update:", data);

  try {
    const [updatedRows] = await Product.update(data, { where: { id } });

    if (updatedRows === 0) {
      res.status(404).json({
        status: "error",
        message: "Product not found or no changes applied",
        payload: null,
      });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      payload: { id, ...data },
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      status: "error",
      message: "Error updating product",
      payload: null,
    });
  }
};

const deleteProduct: RequestHandler = (req: Request, res: Response) => {
  Product.destroy({ where: { id: req.params.id } })
    .then((isDeleted) => {
      if (isDeleted) {
        res.status(200).json({
          status: "success",
          message: "Product deleted successfully",
          payload: null,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Error deleting product",
          payload: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error deleting product",
        payload: null,
      });
    });
};

export {
  createProduct,
  getProducts,
  getProductByCategory,
  updateProduct,
  deleteProduct,
};
