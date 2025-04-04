import { Router, Request, Response } from "express";
import supplierRoutes from "./supplierRoutes";
import productRouter from "./productRoutes";
import userRoutes from "./userRoutes";

const apiRouter: Router = Router();

apiRouter.use("/supplier", supplierRoutes);
apiRouter.use("/user", userRoutes);
apiRouter.use("/product", productRouter);

apiRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default apiRouter;
