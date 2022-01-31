const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/list", (req, res) => {
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

router.get("/detail", (req, res) => {
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

module.exports = router;
