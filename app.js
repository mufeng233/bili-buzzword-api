const express = require("express");
const app = express();
const buzzword = require("./api/buzzword");

app.use("/api/buzzword", buzzword);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
