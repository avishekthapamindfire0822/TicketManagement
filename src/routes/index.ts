import UserRouter from "./UserRouter";
import * as express from "express";
const RootRouter = express.Router();
RootRouter.use("/users", UserRouter);

export default RootRouter;
