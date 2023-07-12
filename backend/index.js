const express = require("express");
const { connection } = require("./db.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(4500, async () => {
  try {
    await connection;
    console.log("server is running on 4500");
  } catch (error) {
    console.log(error);
  }
});
