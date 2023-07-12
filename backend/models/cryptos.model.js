const mongoose = require("mongoose");

//schema
const cryptoSchema = mongoose.Schema(
  {
    exchange_id: { type: String, required: true },
    website: String,
    name: String,
    data_quote_start: String,
    data_quote_end: String,
    data_orderbook_start: String,
    data_orderbook_end: String,
    data_trade_start: String,
    data_trade_end: String,
    data_symbols_count: Number,
    volume_1hrs_usd: Number,
    volume_1day_usd: Number,
    volume_1mth_usd: Number,
  },
  {
    versionKey: false,
  }
);

//model
const CryptoModel = mongoose.model("crypto", cryptoSchema);

module.exports = {
  CryptoModel,
};
