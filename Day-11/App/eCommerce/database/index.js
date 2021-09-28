const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(
    "postgres",//database name
    "postgres",//name of user
    "123456789",//password
    {
        host: "localhost",
        dialect: "postgres"//database being used(agar mySql use karna hai to bas ye badal do to kaam ho jayega)
        // Best reason to use sequelize.
    }

);

sequelize.sync();

//below is a self calling function.
(async () => {
    //try to connect with DB;
    try{
        await sequelize.authenticate();
        console.log("Connection establised with DB");
    }
    // if connection with database fails, to catch block execute hota hai
    catch(err){
        console.error("Unable to connect to DB");
    }
})()


modules.exports = sequelize;