const express = require('express');
const app = express();
require("dotenv").config();
const port = 3000;

app.get("/api/get",(req,res)=>{
    res.send({"message":"My first Node js Application"});
})

app.get("/api/getData",(req,res)=>{
    res.send({"message":"${process.env.name} first Node js project"});
})

app.listen(port,()=>{
    console.log("Listening to ${port}");
})