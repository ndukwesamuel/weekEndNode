const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

console.log(__dirname);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let Fname = req.body.Fname;
  let Lname = req.body.Lname;

  console.log(`${Fname} --- ${Lname}`);
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/service", (req, res) => {
  res.sendFile(__dirname + "/service.html");
  //   res.send("<h2> this is the service part</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
