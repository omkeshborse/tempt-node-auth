require("dotenv").config();
const app = require("./app.js");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is listen on http://localhost:${PORT}`);
});
