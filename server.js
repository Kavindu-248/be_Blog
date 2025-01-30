const express = require('express');	// Import express

const db = require("better-sqlite3")("ourApp.db");	// Import the database
db.pragma("journal_mode = WAL");	// Enable Write-Ahead Logging


//database setup here
const createTables = db.transaction(() => {
    db.prepare(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username STRING NOT NULL UNIQUE,
        password STRING NOT NULL
    )`
  ).run();
});

createTables();







const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}));
app.use(express.static("public"));

app.use(function(req, res, next){
    res.locals.errors = [];
    next()
})



app.get("/", (req, res) => {

    res.render("homepage");

})


app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/register", (req, res) => {

    const errors = [];

    if(typeof req.body.username !== "string") req.body.username = "";
    if(typeof req.body.password !== "string") req.body.password = "";

    req.body.username = req.body.username.trim();

    if(!req.body.username) errors.push("Username is required");
    if(req.body.username && req.body.username.length < 4) errors.push("Username must be at least 4 characters long");
    if (req.body.username && req.body.username.length > 10) errors.push("Username must be at most 20 characters long");
    if(req.body.username && !req.body.username.match(/^[a-zA-Z0-9]+$/)) errors.push("Username must be alphanumeric");

    if(!req.body.password) errors.push("Username is required");
    if(req.body.password && req.body.password.length < 4) errors.push("Password must be at least 4 characters long");
    if (req.body.password && req.body.password.length > 10) errors.push("Password must be at most 10 characters long");


    if (errors.length){
        return res.render("homepage", {errors});
    }

    // save the new user into the database

    //log the user in bu giving them a cookie

    res.send("Thank you for registering");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
