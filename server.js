const express = require("express");
const defaultRoute = require("./routes/defaultRoute");

const app = express();

app.listen(5000, () => console.log("Server is up & running!"));

app.use("/", defaultRoute);
