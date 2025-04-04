"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_1 = require("../models/user");
exports.userController = {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email } = req.body;
                const newUser = yield user_1.User.create({ name, email });
                res.status(201).json(newUser);
            }
            catch (error) {
                res.status(500).json({ error: "Error creating user" });
            }
        });
    },
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_1.User.findAll();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({ error: "Error fetching users" });
            }
        });
    },
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield user_1.User.findByPk(id);
                if (!user) {
                    return res.status(404).json({ error: "User not found" });
                }
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ error: "Error fetching user" });
            }
        });
    },
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email } = req.body;
                const user = yield user_1.User.findByPk(id);
                if (!user) {
                    return res.status(404).json({ error: "User not found" });
                }
                yield user.update({ name, email });
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ error: "Error updating user" });
            }
        });
    },
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield user_1.User.findByPk(id);
                if (!user) {
                    return res.status(404).json({ error: "User not found" });
                }
                yield user.destroy();
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: "Error deleting user" });
            }
        });
    },
};
