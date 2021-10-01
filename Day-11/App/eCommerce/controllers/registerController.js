const User = require("../models/mongo");// ab because of this, Database ke user table se connect kar ke uspe kaam kiya ja sakta hai.
const bcrypt = require("bcrypt");//bcrypt is a hashing library installed in the project, to hash the password.

/**
 * LEVEL - 3:
 * Check if email already exists.
 * Hash Password
 * Convert email in lowercase.
 * Save
 */

const saltRounds = 10;
const register = async (req,res) => {
    const {email, password} = req.body;//GET email and password from req.body
    try{
        const alreadyExists = await User.findOne({ where: { email }}).exec();//find if there exists a user with given email.
        if(alreadyExists){
            res.status(401).send("Email already registered");//401 -> Client Side error
        }
        else{
            // email doesn't exist in DB, to password le ke hash kar do.
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);// 'hash' me password hash ho ke chala jayega.

            const newUser = new User({ email: email.toLowerCase(), password: hash });//converted entered email to lowercase
            const savedUser = await newUser.save();//saved email.
            res.status(201).send("User registered :),", {savedUser});
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send("Something went wrong :(")//Error code 500 means server side error.
    }
     

}

module.exports = register