const express = require("express");
const authRouter = require("./router/authRoutes.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth/", authRouter);
app.use("/", (req, res) => {
  res.status(200).json({
    data: "jwt node auth-updated",
  });
});

module.exports = app;
