"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const userController_1 = require("../controllers/userController");
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.post("/", userController_1.createUser);
userRouter.get("/", userController_1.getUsers);
userRouter.get("/:id", userController_1.getUserById);
userRouter.put("/:id", userController_1.updateUser);
userRouter.delete("/:id", userController_1.deleteUser);
exports.default = userRouter;

