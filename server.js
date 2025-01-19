const express = require('express');	// Import express
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {

    res.render("homepage");

})


app.get("/login", (req, res) => {
    res.render("login")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
