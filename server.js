const express = require("express");
const bodyParser = require("body-parser");
const {mongoose} = require("./src/configs/db");
const {Covid} = require("./src/models/datacovid");
const router = require("./src/routes/api");

const app = express();

app.use(express.json());
app.use("/api/v1/", router);
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Started on port 3000");
});
