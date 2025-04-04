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
  const user = { ...req.body };
  Product.create(user)
    .then((data) => {
      res.status(201).json({
        status: "success",
        message: "User created successfully",
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
        message: "Users retrieved successfully",
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
        message: "User retrieved successfully",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error retrieving user",
        payload: err,
      });
    });
};

const updateProduct: RequestHandler = (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content cannot be empty!",
      payload: null,
    });
  }
  Product.update(req.body, { where: { id: req.params.id } })
    .then((isUpdated) => {
      if (isUpdated) {
        res.status(200).json({
          status: "success",
          message: "User updated successfully",
          payload: { ...req.body },
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Error updating user",
          payload: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error updating user",
        payload: null,
      });
    });
};

const deleteProduct: RequestHandler = (req: Request, res: Response) => {
  Product.destroy({ where: { id: req.params.id } })
    .then((isDeleted) => {
      if (isDeleted) {
        res.status(200).json({
          status: "success",
          message: "User deleted successfully",
          payload: null,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Error deleting user",
          payload: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error deleting user",
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
