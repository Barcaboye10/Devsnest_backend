const emailValidate =(email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const passwordValidate = (password) =>{
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;//re stands for regular Expression
    return re.test(password);//re.test tests whether given string is valid according to given regex
}

modules.exports = {
    emailValidate,
    passwordValidate
}//do values export karna hai, is liye object bana ke saath me export kar diya.