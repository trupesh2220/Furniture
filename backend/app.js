const express = require("express");
const cookieParser = require("cookie-parser");

const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/error");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", productRouter);
app.use("/api/v1", userRouter);
app.use(errorMiddleware);
module.exports = app;
