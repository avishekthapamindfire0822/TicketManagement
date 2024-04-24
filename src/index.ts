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

// app.use(cors({
//   origin: ['https://ticket-management-front-end.vercel.app','https://ticket-management-front-cie9vrgez.vercel.app','https://ticket-management-fr-git-fb0c05-vijay-sharmas-projects-324e8919.vercel.app'],
//   methods: ["POST", "GET","PUT","DELETE"],
//   credentials: true
// }))
app.use(cors())
app.use(bodyParser.json());
app.use("/api", RootRouter);
app.use(globalErrorHandler)

app.get('/',(req,res)=>{
  res.send('hello')
})

app.listen(PORT,ipAddress, () => {
  console.log(`Server is running on port ${ipAddress}:${PORT}`);
});
