const mongoose = require('mongoose')
// Validator k help se hmlog correctness aur syntactical errors  kisi data ka check kr skte h.
// eg:-> agar maan lo bol diye h ki kisi v do user jo ek contact form bharega uska email id aur phone number 
// same ni ho skta h to uss case me hmlog validator se ek condition set karwa skte h.
const validator = require('validator');

// defining our form schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        // minlength: 2
    },
    contact: {
        type: Number,
        // min: 10,
        // required: true
    },
    email: {
        type: String,
        // required: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error("Invalid email id");
        //     }
        // }
    },
    message:{
        type:String,
        // required:true,
        // minlength:3
    },
    address:{
        type:String,
        // required:true,
        // minlength:3
    }
})
// creating a collection in databse
const User = mongoose.model("guest",userSchema);
// guest kis naam se collection bana rhe wo hoga aur hmesha singular hona chaiye , jaise hi databse 
// me ye save hoga apne wo plural ho jayega aur apna schema as second argument de denge.

// ab iss collection ko exposrt karna hoga aur usko require kr lenge apna app.js me.
module.exports= User;




// getting an error in this page when un commenting these data required:true,
//  minlength:3 . try to resolve this