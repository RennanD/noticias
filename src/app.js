const express = require("express");
const { resolve } = require("path");

require("./config/database");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);
app.use("/files", express.static(resolve(__dirname, "..", "tmp", "uploads")));

module.exports = app;
