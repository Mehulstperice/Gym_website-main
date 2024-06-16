import express from "express";
const app=express();

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/another" ,(req,res) => {
    res.render("shoulder.ejs");
});
app.get("/another1" ,(req,res) => {
    res.render("chest.ejs");
});
app.get("/another2" ,(req,res) => {
    res.render("bicep.ejs");
});
app.get("/another3" ,(req,res) => {
    res.render("abs.ejs");
});
app.get("/another4" ,(req,res) => {
    res.render("tricep.ejs");
});
app.get("/another5" ,(req,res) => {
    res.render("leg.ejs");
});
app.get("/another6" ,(req,res) => {
    res.render("back.ejs");
});
app.get("/another7" ,(req,res) => {
    res.render("cardio.ejs");
});

//new
app.get("/home", (req, res) => {
    res.render("home.ejs");
});
app.get("/about", (req, res) => {
    res.render("about.ejs");
});
app.get("/classes", (req, res) => {
    res.render("classes.ejs");
});
app.get("/instructors", (req, res) => {
    res.render("instructors.ejs");
});
app.get("/news", (req, res) => {
    res.render("news.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.listen(3000,()=>{
    console.log("hello running");
}); 
