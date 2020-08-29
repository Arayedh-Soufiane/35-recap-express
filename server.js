const express = require("express");
const app = express();
var datetime = require("node-datetime");
var dt = datetime.create(new Date());
var jour = dt.format("W");
var hour = dt.format("H:M");
var sunday = "Sunday";
var saturday = "Saturday";
var MaxHour = "17:00";
var minHour = "09:00";

app.listen(3020, function (err) {
  if (err) console.log("server not running");
  else console.log("server running in port 3020.");
});

app.use(express.static(__dirname + "/folders html"));
app.get("/", (req, res) => {
  if (hour < MaxHour && hour > minHour) {
    if (jour != sunday && jour != saturday) {
      res.sendFile(__dirname + "/folders html/Home page .html");
    } else {
      res.sendFile(__dirname + "/folders html/Working time erreur.html");
    }
  } else {
    res.sendFile(__dirname + "/folders html/Working time erreur.html");
  }
});
