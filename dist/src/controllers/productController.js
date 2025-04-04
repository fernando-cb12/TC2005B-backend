"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductByCategory = exports.getProducts = exports.createProduct = void 0;
const product_1 = require("../models/product");
const createProduct = (req, res) => {
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content cannot be empty!",
            payload: null,
        });
    }
    const user = Object.assign({}, req.body);
    product_1.Product.create(user)
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
exports.createProduct = createProduct;
const getProducts = (req, res) => {
    product_1.Product.findAll()
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
            message: "Error retrieving products",
            payload: err,
        });
    });
};
exports.getProducts = getProducts;
const getProductByCategory = (req, res) => {
    product_1.Product.findAll({ where: { category: req.params.category } })
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
exports.getProductByCategory = getProductByCategory;
const updateProduct = (req, res) => {
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content cannot be empty!",
            payload: null,
        });
    }
    product_1.Product.update(req.body, { where: { id: req.params.id } })
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
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => {
    product_1.Product.destroy({ where: { id: req.params.id } })
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
exports.deleteProduct = deleteProduct;
