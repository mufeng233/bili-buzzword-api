const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;

app.get("/buzzword/list", (req, res) => {
  axios
    .get("https://api.bilibili.com/x/v2/dm/buzzword/list", {
      params: { ...req.query },
    })
    .then(
      (response) => {
        res.send(response.data);
      },
      (error) => {
        res.send(error);
      }
    );
});

app.get("/buzzword/detail", (req, res) => {
  axios
    .get("https://api.bilibili.com/x/v2/dm/buzzword/detail", {
      params: { ...req.query },
    })
    .then(
      (response) => {
        res.send(response.data);
      },
      (error) => {
        res.send(error);
      }
    );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
