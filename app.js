const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));
console.log(path.join(__dirname, "src/views"));
app.get("/", (req, res) => {
    res.render("index");
});
app.listen(8000, () => {
    console.log('Server on port' + 8000);
});