const express = require("express");

//creating express app
const app = express();


// Listening for request on port 4000
app.listen(4000, ()=>{
    console.log("listening on port 4000")
})