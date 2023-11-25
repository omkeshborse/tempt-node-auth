const express = require("express");
const authRouter = require("./router/authRoutes.js");
const databaseConnection = require("./config/configDatabase.js");
const cookieParser = require("cookie-parser");

const app = express();
databaseConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth/", authRouter);
app.use("/", (req, res) => {
  res.status(200).json({
    data: "jwt node auth-updated",
  });
});

module.exports = app;
