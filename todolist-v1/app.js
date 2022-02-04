const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
var items = ["Cake", "Bun", "Coffee"];
app.get('/', (req, res) => {
    var today = new Date();
    var options = { weekday: "long", day: "numeric", month: "long" }
    var day = today.toLocaleDateString("en-US", options);

    res.render('list', { kindOfDay: day, newItemList: items });
})

app.post('/', (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})