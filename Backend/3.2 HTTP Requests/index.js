import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("server running on portsies 3000");
});

app.get("/", (req, res)=>{
    res.send("<h1> Helloooo </h1>");
    //console.log(req.rawHeaders);
});

app.get("/about", (req, res)=>{
    res.send("<h1>about meh</h1>");
});

app.get("/contact", (req, res)=>{
    res.send("<p>asdjkashdhsad</p>");
});