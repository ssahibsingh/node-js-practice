const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/signup.html');
})

app.post('/', (req,res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    console.log(fname);
    console.log(lname);
    console.log(email);
})

app.listen(3000, ()=>{
    console.log("listening at port 3000");
})
