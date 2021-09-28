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


It's better we make different middlewares for different levels, taaki kahin koi dikkat aaye ek level me to usko trace kar lein and usko sahi kar lein, so that baaki process/middlewares pe asar na pade.(Also makes the program modular)
 
