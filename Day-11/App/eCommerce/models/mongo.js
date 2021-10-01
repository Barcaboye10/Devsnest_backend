const mongoose = require("mongoose");
const Schema = mongoose.Schema;// similar to Sequelize.define - dono schema define karne ke liye hai, to model the database.

const UserSchema = new Schema({
    fullName:{type: String, default: "" },
    email:{type: String, default: "" },
    password:{type: String, default:"" },
})

module.exports = User = mongoose.model("User", UserSchema);