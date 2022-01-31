const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ "/index.html");
});

app.post('/', (req, res)=>{
    const query = req.body.cityName;
    const apiKey = "f9158ddb2b3c11724b20b9115bde1617";
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units=" + units; 
    
    https.get(url, (response)=>{
        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>The Temperature in " +query+ " is "+temp+" degrees Celsius.</h1>");
            res.write("<h3>The Weather is currently "+desc+"</h3>");
            res.write("<img src='"+imageURL+"'>");
            res.send();
        })
    })
})

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});

    