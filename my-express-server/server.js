const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send('Hello');
})
app.get('/about', function(req, res){
    res.send("Hi, I am Sahib Singh");
})
app.get('/contact', function(req, res){
    res.send("Contact me at snone181@gmail.com");
})
app.listen(5000, function(){
    console.log('listening on port 5000');
})
