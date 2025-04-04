import { RequestHandler, Request, Response } from "express";
import { Supplier } from "../models/supplier";

export const createSupplier: RequestHandler = (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content can not be empty",
      payload: null,
    });
  }

  const supplier = { ...req.body };
  Supplier.create(supplier)
    .then((data: Supplier | null) => {
      res.status(200).json({
        status: "success",
        message: "Supplier successfully created",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Something happened creating a supplier. " + err.message,
        payload: null,
      });
    });
};

export const getAllSuppliers: RequestHandler = (
  req: Request,
  res: Response
) => {
  Supplier.findAll()
    .then((data: Supplier[]) => {
      return res.status(200).json({
        status: "success",
        message: "Supplier successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving all suppliers. " + err.message,
        payload: null,
      });
    });
};

export const getSupplierById: RequestHandler = (
  req: Request,
  res: Response
) => {
  Supplier.findByPk(req.params.id)
    .then((data: Supplier | null) => {
      return res.status(200).json({
        status: "success",
        message: "Suppliers successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving all suppliers. " + err.message,
        payload: null,
      });
    });
};

export const modifySupplier: RequestHandler = (req: Request, res: Response) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content can not be empty.",
      payload: null,
    });
  }
  // Save Supplier in the database
  Supplier.update({ ...req.body }, { where: { id: req.params.id } })
    .then((isUpdated) => {
      if (isUpdated) {
        return res.status(200).json({
          status: "success",
          message: "Supplier successfully updated",
          payload: { ...req.body },
        });
      } else {
        return res.status(500).json({
          status: "error",
          message: "Something happened updating the supplier. ",
          payload: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Something happened updating a supplier. " + err.message,
        payload: null,
      });
    });
};

export const deleteSupplier: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  try {
    await Supplier.destroy({ where: { id } });
    res.status(200).json({ message: "Supplier deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting suppliers",
      error,
    });
  }
};
