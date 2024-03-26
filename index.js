import express from "express";
const app = express();
import dbConn from "./connection/conn.js";
import userRoute from "./route/userRoute.js";
import dotenv from "dotenv";
import cors from "cors";

app.use(cors());
app.use(express.json());
dotenv.config();
//rest object
//port connection
const port = process.env.PORT || 80003;


app.listen(port, () => {
  console.log(`Connected with port ${port}`);
});
//connecting with database
dbConn();

app.use("/user",cors() ,userRoute);
