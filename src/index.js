const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
app.use(morgan("combined"));
//Template engine
var hbs = exphbs.create({
  helpers: {
    sayHello: function () {
      alert("Hello World");
    },
    getStringifiedJson: function (value) {
      return JSON.stringify(value);
    },
  },
  defaultLayout: "main",
  extname: ".hbs",
});
app.engine("hbs", hbs.engine);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
