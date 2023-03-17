const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/abc")
    .then(() => console.log("Connected!"))
    // .catch((err)=>{console.log("your are getting error in mongodb",err.message)});
};

module.exports = connectDatabase;
