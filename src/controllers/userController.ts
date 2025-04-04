import e, { Request, RequestHandler, Response } from "express";
import { User } from "../models/user";

const createUser: RequestHandler = (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content cannot be empty!",
      payload: null,
    });
  }
  const user = { ...req.body };
  User.create(user)
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
        message: "Error creating user",
        payload: error,
      });
    });
};

const getUsers: RequestHandler = (req: Request, res: Response) => {
  User.findAll()
    .then((data: User[]) => {
      res.status(200).json({
        status: "success",
        message: "Users retrieved successfully",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error retrieving users",
        payload: err,
      });
    });
};

const getUserById: RequestHandler = (req: Request, res: Response) => {
  User.findByPk(req.params.id)
    .then((data: User | null) => {
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

const updateUser: RequestHandler = (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content cannot be empty!",
      payload: null,
    });
  }
  User.update(req.body, { where: { id: req.params.id } })
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

const deleteUser: RequestHandler = (req: Request, res: Response) => {
  User.destroy({ where: { id: req.params.id } })
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

export { createUser, getUsers, getUserById, updateUser, deleteUser };
