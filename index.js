const express = require("express");
const app = express();
const product = require("./api/product");
const buzzword = require("./api/buzzword");

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(express.json({ extended: false }));

app.use("/product", product);
app.use("/buzzword", buzzword);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
