/** @format */

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const employeeRoute = require("./routes/employeeRoute");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(employeeRoute);

app.listen(3000);
