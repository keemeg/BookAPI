const express = require("express");
const http = require("http");

const app = express();
app.use(express.static(__dirname + "/client"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/client/html/index.html");
});
const server = http.createServer(app).listen(process.env.PORT || 3000);
