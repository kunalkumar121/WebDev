const mongoose = require('mongoose');

main()
    .then(() => {console.log("succese")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email :String,
    age:Number,
});

const User = mongoose.model("User" , userSchema);

// const user1 = new User ({
//     name: "kunal",
//     email: "kunal@gmail.com",
//     age:20,
// });

// user1.save();


// hole the data was show then use 
// User.find({});

// User.find({age:{$gte:18}}).then ((data) => {
//     console.log(data);
// });

User.findOneAndDelete({name:"kunal"}) .then((data)=> {
    console.log (data);
})
