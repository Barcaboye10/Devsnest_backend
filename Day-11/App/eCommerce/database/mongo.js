//Things needed to connect mongoDB to Express:
    // 1) MongoDB
    // 2) Mongoose: is very similar to sequelize.

var mongoose = require("mongoose");

var mongodb="mongodb://localhost:27017/my_database";
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});

var db= mongoose.connection;

// for error handling while connecting to mongoDB
db.on("error", console.error.bind(console, "Mongodb connection error"));
