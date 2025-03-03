const express=require("express");
const methodoveride = require("method-override");
const path=require("path");
const ejsmate=require("ejs-mate");
const bodyparser=require("body-parser");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app=express();


app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsmate);
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(methodoveride("_method"));
app.use("/assests", express.static(path.join(__dirname, "assests")));
app.use(bodyparser.urlencoded({ extended: true }));


app.listen(PORT,()=>{
    console.log("app is listening to the port");
})






app.get("/root",(req,res)=>{
    res.render("intro.ejs");
})

app.get("/key", (req, res) => {
    const year = req.query.year || "Unknown"; // Get year from URL query
    res.render("keyloading.ejs", { year: year }); // Pass year to EJS
});
app.post('/round1', (req, res) => {
    const team = req.body.team;
    const year = req.body.year;

    // Render Round 1 page with the team and year data
    res.render('round1', { team: team, year: year });
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.get("/round2_1",(req,res) => {
    res.render("round2.ejs");
})

app.get("/round2_2",(req,res) => {
    res.render("round22.ejs");
})

app.get("/round2_3",(req,res) => {
    res.render("round33.ejs");
})

app.get("/round2_4",(req,res) => {
    res.render("round33.ejs");
})