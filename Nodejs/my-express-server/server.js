const express = require("express");
const app = express();

//checks out for get requests by the browser(Initially to the root of the website)
app.get("/",function (req,res){
    // console.log("Hello");
    res.send("Hello");
})

/*when the browser checks out this location and make a get request, it has the following
  response */
app.get("/contact",function(req,res){
    res.send("<h1>Hi</h1>");
})

//attached to the port 3000, the server listens to it.
app.listen(3000,function(){
    console.log("server started at port 3000");
})