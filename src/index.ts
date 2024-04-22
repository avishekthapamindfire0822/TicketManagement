import * as dotenv from "dotenv";
dotenv.config();
import environment from "./constants";
import bodyParser = require("body-parser");
import RootRouter from "./routes";
import { app } from "./app";
import globalErrorHandler from "./utils/GlobalErrorHandler";
import * as cors from "cors";
// import {Request,Response} from 'express'
const PORT = environment.SERVER_PORT || 3000;
const ipAddress =environment.IP_ADDRESS

app.use(cors())
app.use(bodyParser.json());
app.use("/api", RootRouter);
app.use(globalErrorHandler)
// app.get('/',(req:Request,res:Response)=>{
//   res.send("Hello")
// })
app.listen(PORT,ipAddress, () => {
  console.log(`Server is running on port ${PORT}`);
});
