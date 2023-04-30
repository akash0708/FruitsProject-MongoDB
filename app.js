const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
const bodyParser = require('body-parser')


const fruitSchema = new mongoose.Schema({
//     name: {
//       // Data validation using mongoose
//     type: String,
//     required: [true, "Please chack your data entry, no name specified"]
//   },
    name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 34,
  review: "Pretty solid as a fruit"
})



const person = new Person({
    name: "John",
    age: 37
})

// person.save();

// const kiwi = new Fruit({
    //     name: "Kiwi",
    //     rating: 10,
//     review: "The best!"
// })

// const orange = new Fruit({
//     name: "orange",
//     rating: 9,
//     review: "Too sour!"
// })

// const banana = new Fruit({
//     name: "banana",
//     rating: 10,
//     review: "The healthiest!"
// })

const peaches = new Fruit({
    rating: 10,
    review: "The yummiest!"
})

// Fruit.insertMany([kiwi, orange, banana])

// apple.save()

// peaches.save()



// Fruit.find({})
// .then((fruits) => {

//     mongoose.connection.close()

//   fruits.forEach(fruit => {
//     console.log(fruit.name)
//   });
// })
// .catch((err) => {
//   console.error(err);
// });

// Promises or async await needed. the old method no longer works


Fruit.updateOne({review: "The yummiest!"}, {name: "Peach"}) 

async function updateUser(id, updatedUser) {
    try {
      // Find a user by ID and update their data
      const result = await Fruit.updateOne({ _id: id }, updatedUser);
  
      console.log(`${result.nModified} user(s) updated.`);
    } catch (err) {
      console.error(err);
    } finally {
      // Close the database connection
      mongoose.connection.close();
    }
  }
  
  // Call the function to update a user
//   updateUser('64310074f9e6cffc76365ff2', { name: 'Peaches'});

async function deleteUser() {
    try {
      const result = await Fruit.deleteOne({ _id: '64310074f9e6cffc76365ff2' });
      console.log(`${result.deletedCount} user(s) deleted.`);
    } catch (err) {
      console.error(err);
    } finally {
      // Close the database connection
      mongoose.connection.close();
    }
  }
  
  deleteUser();