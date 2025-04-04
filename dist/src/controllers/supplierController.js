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
exports.deleteSupplier = exports.modifySupplier = exports.getSupplierById = exports.getAllSuppliers = exports.createSupplier = void 0;
const supplier_1 = require("../models/supplier");
const createSupplier = (req, res) => {
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    const supplier = Object.assign({}, req.body);
    supplier_1.Supplier.create(supplier)
        .then((data) => {
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
exports.createSupplier = createSupplier;
const getAllSuppliers = (req, res) => {
    supplier_1.Supplier.findAll()
        .then((data) => {
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
exports.getAllSuppliers = getAllSuppliers;
const getSupplierById = (req, res) => {
    supplier_1.Supplier.findByPk(req.params.id)
        .then((data) => {
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
exports.getSupplierById = getSupplierById;
const modifySupplier = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save Supplier in the database
    supplier_1.Supplier.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Supplier successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
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
exports.modifySupplier = modifySupplier;
const deleteSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield supplier_1.Supplier.destroy({ where: { id } });
        res.status(200).json({ message: "Supplier deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting suppliers",
            error,
        });
    }
});
exports.deleteSupplier = deleteSupplier;
