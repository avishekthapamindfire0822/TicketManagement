import * as dotenv from "dotenv";
dotenv.config();
import environment from "./constants";
import bodyParser = require("body-parser");
import RootRouter from "./routes";
import { app } from "./app";
import globalErrorHandler from "./utils/GlobalErrorHandler";
const PORT = environment.SERVER_PORT || 3000;
app.use(bodyParser.json());
app.use("/api", RootRouter);
app.use(globalErrorHandler)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
