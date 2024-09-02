const express = require("express");
const router = require("./src/routes/router");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = process.env.PORT || 5489;
app.listen(port, () => {
  console.log(`${port} is run 🏃‍♂️‍➡️`);
});
