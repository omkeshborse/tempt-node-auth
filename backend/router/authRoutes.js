const express = require("express");
const { signup, signin, getuser } = require("../controller/authControllers.js");
const jwtAuth = require("../middleware/jwtAuth.js");
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.get("/user", jwtAuth,getuser);
module.exports = authRouter;
