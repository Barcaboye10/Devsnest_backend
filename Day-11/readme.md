Learned Today:

    -Authentication(Register / Login wala kaam)


Kuch bhi kaam karte hain backend me to keep in mind three things:
    1)Security
    2)Performance
    3)Edge cases.


Things we keep in mind for 'register' POST request:


    * @requires{ email, firstName, lastName, password, confirmPassword} -> we get it in 'req.body'
    * Keep in mind the concern of Security, Performance and Edge cases.
    * email Validation -> must be a proper email; We use regex to check the validity of the email.
    * Password Validation -> Min 6, one uppercase, one lowercase, etc.; we use regex to check the validity of the password.
    * Check if there is a JS/ SQL Injection.(String JavaScript ya SQL Commands ki tarah na ho) -> THA
    * Check if email already exists.
    * Hash Password
    * Convert email in lowercase.
    * Save


It's better we make different middlewares for different levels, taaki kahin koi dikkat aaye ek level me to usko trace kar lein and usko sahi kar lein, so that baaki process/middlewares pe asar na pade.(Also makes the program modular i.e. to have seperation of concerns)
 

Jab bhi we have to do actual work or work related to database connectivity, we put it in controllers folder.(Actual work -> basically jo function middleware ke baad aayega.)


Sequelize:

    -We establish connectivity with database using sequelize.
    
    -Sequelize is ORM i.e. Object-relational model.

    -If we wish to use "MySQL" instead of "Postgres" later, change the 'dailect' to "MySQL", and no other changes in the code is needed.


Models folders contain files jisase pata chalta hai ki hamara database dikhne kaisa wala hai.


Sequelize.define("User",{
    ......
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    }
    .......
}):

    -function used to define ki database dikhne kaisa wala hai, basically database ka structure banane ke liye.

    -kuch kuch checks bhi allow karta hai.

    -"User" is the name of the table.

    -"fullName" attribute has 'STRING' datatype and it cannot be 'NULL'.
    

const register = async (req,res) => {
    const {email, password} = req.body;//GET email and password from req.body
    try{
        const alreadyExists = await User.findOne({ where: { email }});
        if(alreadyExists){
            res.status(401).send("Email already registered");
        }
        else{

        }
    }
    catch(err){
        console.error(err);
    }
}:


Database ki call time taking hoti hai, time taking hogi to event loop me fas jayegi, to usko wait karna padega. Hence '(req, res)'  ko async banana padega, and Users.findOne ko await. And, hamesha Async Await ki call ko try catch me handle karna chahiye.


To Hash Password, we need to install any of the hashing libraries, like 'bcrypt'.