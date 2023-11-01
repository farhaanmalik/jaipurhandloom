const express = require("express");
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

const corsOptions = {
  origin: "https://jaipurhandloom.vercel.app",
  methods: "POST,GET,PUT,DELETE",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
