const express = require("express");
const { CryptoModel } = require("../models/cryptos.model");
const { IconsModel } = require("../models/icons.model");
const axios = require("axios");
const { connection } = require("../db");
const cryptoRouter = express.Router();

cryptoRouter.get("/", async (req, res) => {
  var cryptos = await CryptoModel.find().sort({ volume_1day_usd: -1 });
  // const cryptos = await CryptoModel.find().sort({ volume_1day_usd: -1 });
  var icons = await IconsModel.find();
  if (cryptos.length === 0) {
    try {
      axios
        .get(
          "https://rest.coinapi.io/v1/exchanges/apikey-FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9/"
        )
        .then(function (response) {
          response.data?.forEach((ele) => new CryptoModel(ele).save());
          // res.status(201).send(response.data);
        })
        .catch(function (error) {
          res.send(error);
        });
    } catch (error) {
      res.send(error);
    }
  } else {
    var cryptos = await CryptoModel.find().sort({ volume_1day_usd: -1 });
    res.status(202).json({ cryptos, icons });
  }
});

cryptoRouter.get("/icons", async (req, res) => {
  var icons = await IconsModel.find();

  if (icons.length === 0) {
    try {
      axios
        .get(
          "https://rest.coinapi.io/v1/exchanges/icons/32/apikey-FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9/"
        )
        .then(function (response) {
          response.data?.forEach((ele) =>
            ele.url ? new IconsModel(ele).save() : ""
          );
          // res.status(201).send(response.data);
        })
        .catch(function (error) {
          res.send(error);
        });
    } catch (error) {
      res.send(error);
    }
  } else {
    var icons = await IconsModel.find();
    res.status(202).json({ icons });
  }
});

module.exports = {
  cryptoRouter,
};
