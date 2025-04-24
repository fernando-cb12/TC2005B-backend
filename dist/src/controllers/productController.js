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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    const product = Object.assign({}, req.body);
    product_1.Product.create(product)
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
exports.createProduct = createProduct;
const getProducts = (req, res) => {
    product_1.Product.findAll()
        .then((data) => {
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
exports.getProducts = getProducts;
const getProductByCategory = (req, res) => {
    product_1.Product.findAll({ where: { category: req.params.category } })
        .then((data) => {
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
exports.getProductByCategory = getProductByCategory;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({
            status: "error",
            message: "Invalid product ID",
            payload: null,
        });
        return;
    }
    const _a = req.body, { id: _ } = _a, data = __rest(_a, ["id"]);
    console.log("Updating product with ID:", id);
    console.log("Data to update:", data);
    try {
        const [updatedRows] = yield product_1.Product.update(data, { where: { id } });
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
            payload: Object.assign({ id }, data),
        });
    }
    catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({
            status: "error",
            message: "Error updating product",
            payload: null,
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => {
    product_1.Product.destroy({ where: { id: req.params.id } })
        .then((isDeleted) => {
        if (isDeleted) {
            res.status(200).json({
                status: "success",
                message: "Product deleted successfully",
                payload: null,
            });
        }
        else {
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
exports.deleteProduct = deleteProduct;
