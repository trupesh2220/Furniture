const express = require("express");
const cookieParser = require("cookie-parser");

const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");
const errorMiddleware = require("./middleware/error");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", productRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", orderRouter);

app.use(errorMiddleware);
module.exports = app;
