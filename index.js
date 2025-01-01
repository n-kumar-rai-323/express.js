const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("My Name is  " + req.query.name);
});

app.get("/about", (req, res) => {
  return res.send("Hello from About page");
});
// const myServer = http.createServer(app);
app.listen(8000, () => console.log("Server Started!") )
// myServer.listen(8000,);
