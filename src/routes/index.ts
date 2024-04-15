import ticketRouter from "./TicketRouter";
import UserRouter from "./UserRouter";
import * as express from "express";
const RootRouter = express.Router();
RootRouter.use("/users", UserRouter);
RootRouter.use("/tickets",ticketRouter)

export default RootRouter;
