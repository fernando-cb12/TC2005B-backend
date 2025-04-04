import { Router, Request, Response } from "express";
import productRouter from "./productRoutes";
import userRoutes from "./userRoutes";

const apiRouter: Router = Router();

apiRouter.use("/user", userRoutes);
apiRouter.use("/product", productRouter);

apiRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default apiRouter;
