import { Router, Request, Response } from "express";
import supplierRoutes from "./supplierRoutes";

const apiRouter: Router = Router();

apiRouter.use("/supplier", supplierRoutes);

apiRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default apiRouter;
