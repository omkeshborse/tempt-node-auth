const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nodeauth-revision";
const databaseConnection = async () => {
  mongoose
    .connect(MONGODB_URI)
    .then((conn) => {
      console.log(`Connected to DB :${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};

module.exports = databaseConnection; 