const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.use(express.static("public"))

app.get("/contato", (req, res) => {
  res.render("contato");
});

app.get("/habilidades", (req, res) => {
  res.render("habilidades");
});

app.get("/projetos", (req, res) => {
  res.render("projetos");
});

app.get("/sobre", (req, res) => {
  res.render("sobre");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App funcionando");
});
