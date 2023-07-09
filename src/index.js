import express from "express";
import countryRouter from "./routes/country.routes.js";
const app = express();

app.use(express.json({limit:"50mb"}));
app.use("/country", countryRouter);
app.listen(8080, () => {
  console.log("server is running...");
});
