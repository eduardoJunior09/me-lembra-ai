const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Deu Certo!");
});

app.listen(3000, () => console.log("API Rodando"));
