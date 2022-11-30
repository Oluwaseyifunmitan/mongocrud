import express from "express";
import logger from "morgan";
import router from "./routes/todoRoutes";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE_URL!, () => {
  console.log("database connected successfully");
});

app.use(express.json());
app.use(logger("dev"));

app.use("/todo", router);

const Port = 4000;

app.listen(Port, () => {
  console.log(`server is listening on http://localhost ${Port}`);
});
