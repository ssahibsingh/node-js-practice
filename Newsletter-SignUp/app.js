const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();
app.bodyParser = urlencoded({entended: true});

app.listen(3000, ()=>{
    console.log("listening at port 3000");
})
