const express = require("express");

const productRouter = require("./routes/productRoute");
const app = express();
app.use(express.json());
const errorMiddleware = require("./middleware/error")

app.use("/api/v1", productRouter);
app.use(errorMiddleware)
module.exports = app;
