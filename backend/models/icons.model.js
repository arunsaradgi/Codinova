const mongoose = require("mongoose");

//schema
const iconsSchema = new mongoose.Schema(
  {
    exchange_id: { type: String, required: true },
    url: String,
  },
  {
    versionKey: false,
  }
);

//model
const IconsModel = mongoose.model("icons", iconsSchema);

module.exports = {
  IconsModel,
};
