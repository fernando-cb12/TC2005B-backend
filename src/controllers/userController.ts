import user from "../models/user";
import { Request, Response } from "express";
import { User } from "../models/user";

const userController = {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const newUser = await User.create({ name, email });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  },

  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Error fetching users" });
    }
  },
};
