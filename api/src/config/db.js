const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.Promise = global.Promise;  // TO Use Promises With mongoose

try{
    //connect to DB
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });  //{ useNewUrlParser: true, useUnifiedTopology: true} : To remove depreciation Warnings
    
} catch (err) {
    throw err;
}

//Message If successfully Connected to DB
mongoose.connection.on("connected", () => {
    console.log(`Connected to database ${process.env.DB_URL}`);
});

//Message If there's an error in database connection
mongoose.connection.on("error", (err) => {
    throw err;
});

//To remove mongoose mongoose depreciation warnings
//mongoose.set("useFindAndModify", false);
//mongoose.set("useCreateIndex", true);