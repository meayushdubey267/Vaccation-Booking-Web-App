const mongoose = require("mongoose");

// creating a database
mongoose.connect("mongodb://localhost:27017/merndb", {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connetion successful");
}).catch((error) => {
    console.log(error);
})