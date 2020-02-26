require('dotenv').config()

var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    
    bodyParser = require("body-parser");


// DB Connection     
const databaseUri = process.env.MONGODB_URI;
mongoose.connect(databaseUri, {useNewUrlParser: true}, {useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs")
app.use(express.static(__dirname + "/public"));




app.get("/", function(req, res){
    res.render("app")
});


//Ports 
const port = process.env.PORT
app.listen(port,process.env.IP, function(){
console.log('Server is listening on port:' + port)
module.exports = app
});