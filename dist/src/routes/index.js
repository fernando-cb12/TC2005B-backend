"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supplierRoutes_1 = __importDefault(require("./supplierRoutes"));
const productRoutes_1 = __importDefault(require("./productRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use("/supplier", supplierRoutes_1.default);
apiRouter.use("/user", userRoutes_1.default);
apiRouter.use("/product", productRoutes_1.default);
apiRouter.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = apiRouter;
