const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1, 
    max: 10
  },
  review: String
})

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: "Orange",
  rating: 7,
  review: "Great Fruit"
})

// fruit.save();

const peopleSchema = mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit : fruitSchema
});

const People = mongoose.model('People', peopleSchema);

// const person = new People({
//   name: "Sahib",
//   age: 18
// });

// person.save();
const pineapple = new Fruit({
  name: "Pineapple",
  rating: 7,
  review: "Great Fruit"
})
pineapple.save();

const person = new People({
  name: "Sahib Singh",
  age: 18,
  favoriteFruit: pineapple
});
person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 9,
  review: "Kiwi"
})

const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Banana"
})

// Fruit.insertMany([kiwi, banana], (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully Inserted Data");
//   }
// })

Fruit.find((err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(result);
    // mongoose.connection.close();
    
    result.forEach(fruit => {
      console.log(fruit.name);
    });
  }
})

// Fruit.deleteOne({name: "Orange"}, (err, result)=>{
//   if(err){
//     console.log(err);
//   }else {
//     console.log(result);
//   }
// });



// Mongoose Schema
// Mongoose Model (This will take collection name and the schema that we have created)
// Make document from the Model