const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// FRUITS COLLECTION

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// INSERT FRUITS IN BULK

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit ({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// });

// const banana = new Fruit ({
//     name: "Banana",
//     score: 3,
//     review: "Wierd texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

// fruit.save();

// PEOPLE COLLECTION

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema   //-created relationship to fruit
});

const Person = mongoose.model("Person", personSchema);

const pinapple = new Fruit({
    name: "Pinapple",
    score: 9,
    review: "Great fruit."
})

// pinapple.save();

const lemon = new Fruit({
    name: "Lemon",
    score: 10,
    review: "Healthy fruit."
})

// lemon.save();

const mango = new Fruit ({
    name: "Mango",
    score: 6,
    review: "Decent fruit."
})

// mango.save();

const person = new Person({
    name: "John",
    age: 37,
    favouriteFruit: lemon
});

// person.save();

// TO ADD FAVOURITE FRUIT

// Person.updateOne({name: "John"}), {favouriteFruit: mango}, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document");
//     }
// }

// TO FIND A SPECIFIC FRUIT

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        // mongoose.connection.close();  //- to close connection after forEach loop is finished
       fruits.forEach(function(fruit) {
           console.log(fruit.name);
       });
    }  
});

// err - error
