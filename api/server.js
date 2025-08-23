import express from "express";
import dotenv from "dotenv";
import explorerRouter from "./routes/explorerRouter.js";
import artistRouter from "./routes/artistRouter.js";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT;

//Routes
app.use("/home/explorer", explorerRouter);
app.use("/home/artist", artistRouter);

app.listen(port, () => {
  console.log("server started");
});
