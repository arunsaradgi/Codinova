const express = require("express");
const { connection } = require("./db.js");
const { cryptoRouter } = require("./routes/crypto.routes.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/crypto", cryptoRouter);

app.listen(4500, async () => {
  try {
    await connection;
    console.log("server is running on 4500");
  } catch (error) {
    console.log(error);
  }
});
