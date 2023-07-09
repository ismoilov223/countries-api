import express from "express";
import countryRouter from "./routes/country.routes.js";
const app = express();
import dotev from "dotenv"
dotev.config();
app.use(express.json({limit:"50mb"}));
app.use("/country", countryRouter);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server is running...");
});
