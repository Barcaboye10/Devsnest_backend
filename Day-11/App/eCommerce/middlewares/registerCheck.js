/**
 * @description
 * LEVEL - 1:
 * email Validation -> must be a proper email
 * Password Validation -> Min 6, one uppercase, one lowercase, etc.
 * Password Confirm.
 */

const { emailValidate, passwordValidate } = require("../utils/Validation");

const registerInitialCheck = (req, res, next) => {
    const {email, password, confirmPassword} = req.body;
    if(
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' &&
        email.length > 0 &&
        password.length > 8 &&
        confirmPassword === password &&
        emailValidate(email) &&
        passwordValidate(password)
    )
    {
        next();// middleware hai, to agar sab sahi hai to agle function pe chale jao.
    }
    else{
        res.status(401).send("Initial check failed");//error code 401 means client side error hai kuch.
    }
};

module.exports = registerInitialCheck;
