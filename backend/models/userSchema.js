const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "user name is required"],
      minLength: [5, "Name must be atleast 5 char"],
      maxLength: [50, "Name must be less than 50 char"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "user email is required"],
      unique: [true, "Already registered"],
      lowercase: true,
    },
    password: {
      type: String,
      select: false,
    },
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordExpiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
