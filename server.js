require('dotenv').config({ path: 'ENV_MONGODB_URI'});

var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");


// DB Connection     
const databaseUri = process.env.MONGODB_URI;
mongoose.connect(databaseUri, {useNewUrlParser: true});



// Routes 
app.get("/", function(req, res){
    res.send("boy fuck you")
});


//Ports 
const port = process.env.PORT
app.listen(port,process.env.IP, function(){
console.log('Server is listening on port:' + port)
module.exports = app
});