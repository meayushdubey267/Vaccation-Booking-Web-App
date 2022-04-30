const express = require('express');
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage");
const hbs = require("hbs");
const { extend } = require('jquery');
const app = express();
const port = process.env.PORT || 3000;


// setting the static path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");


// middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({ extended: false }))
// urlencoded se express ko bata rhe ki form ka data do hmko .

app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

// Routing
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("/services", (req, res) => {
    res.render("services");
})
app.get("/gallery", (req, res) => {
    res.render("gallery");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.post("/contact", async(req, res) => {
    try {
        // res.send(req.body);
        const UserData = new User(req.body);
        await UserData.save();
        res.status(201).render("index");
    }
    catch (error) {
        res.status(500).send(error);
    }
})

// server created
app.listen(port, () => {
    console.log(`server listening at port no ${port}`);
})