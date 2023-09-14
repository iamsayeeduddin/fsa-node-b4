const express = require("express");
const bodyParser = require("body-parser");

const defaultRoute = require("./routes/defaultRoute");
const bookRoute = require("./routes/bookRoute");
const productRoute = require("./routes/productRoute");
const mongoose = require("mongoose");

const app = express();

app.listen(5000, () => console.log("Server is up & running!"));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/fsa-b4")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

app.use("/", defaultRoute);
app.use("/books", bookRoute);
app.use("/products", productRoute);
