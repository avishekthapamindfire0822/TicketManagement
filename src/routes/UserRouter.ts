import * as express from "express";
import * as userController from "../controllers/UserController";
import globalErrorHandler from "../utils/GlobalErrorHandler";

const UserRouter = express.Router();


UserRouter.post("/", userController.createUser, globalErrorHandler);


UserRouter.post("/login", userController.userloginControoler, globalErrorHandler)

export default UserRouter;
