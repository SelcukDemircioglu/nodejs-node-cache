const express = require("express");
const bodyParser = require("body-parser");
const cache=require("./src/cache");

 //service api 
const app = express();


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//http client or https 
var http = require('http');

//create http  or https server
const httpServer = http.createServer(app);

//path simples routes

const controllers=require("./controller");

// simple route
app.get("/" ,(req,res) => {
    res.json({ message: "Welcome to  application." });
} );


app.get("/GetList", cache.get,controllers.findAll,cache.set(60)); //60 => seconds after delete cache

app.post("/Add",controllers.add,cache.clear);
  

// set port, listen for requests
const PORT = process.env.PORT || 8081;
httpServer.listen(PORT,()=>{
    console.log(`Server dese is running on port ${PORT}.`);
  })