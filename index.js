const express = require("express");
const app = express();
const product = require("./api/product");
const buzzword = require("./api/buzzword");

app.use(express.json({ extended: false }));

app.use("/product", product);
app.use("/buzzword", buzzword);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
