const {DataTypes} =require("sequelize");
const sequelize =require("../database");

//model of the database
const User = sequelize.define("User", {
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});


module.exports = User