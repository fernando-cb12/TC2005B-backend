"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const user_1 = require("../models/user");
const createUser = (req, res) => {
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content cannot be empty!",
            payload: null,
        });
    }
    const user = Object.assign({}, req.body);
    user_1.User.create(user)
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
exports.createUser = createUser;
const getUsers = (req, res) => {
    user_1.User.findAll()
        .then((data) => {
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
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    user_1.User.findByPk(req.params.id)
        .then((data) => {
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
exports.getUserById = getUserById;
const updateUser = (req, res) => {
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content cannot be empty!",
            payload: null,
        });
    }
    user_1.User.update(req.body, { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            res.status(200).json({
                status: "success",
                message: "User updated successfully",
                payload: Object.assign({}, req.body),
            });
        }
        else {
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
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    user_1.User.destroy({ where: { id: req.params.id } })
        .then((isDeleted) => {
        if (isDeleted) {
            res.status(200).json({
                status: "success",
                message: "User deleted successfully",
                payload: null,
            });
        }
        else {
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
exports.deleteUser = deleteUser;
