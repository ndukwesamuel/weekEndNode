// let name = "sam";
// console.log(name);

// let ans = 20 * 4;
// console.log(ans);

// const start = ["man_u ", "manches", "skjsdkj"];

// console.log(start);

// let id = document.getElementById("go");

// console.log(id);

// var http = require("http");

// // console.log(http);
// const superheroes = require("superheroes");

// let all = superheroes.all;

// console.log(all);

const http = require("http");

const server = http.createServer((request, response) => {
  console.log("server has been created");
});

server.listen(5000, "localhost", () => {
  console.log("we are watching the browser");
});
