MIDDLEWARE:
        -A function which runs before running our function with main excecution to check whether or not is it okay to run our function with main excecution.
        -This function has a third parameter next, and it is used to call our function with main excecution(by writing "next()").
        -Useful when you have to check the same condition for many APIs.
    
app.use():
    const middleware(req, res, next) => {
        .......
    };
    app.use(middleware):
        -middleware runs before every APIs(alag se check karne keliye middleware nahi likhna padega sabme.
        -app.use unhi APIs pe kaam karega jo app.use ke baad likhi hogi.

Note: url is stored in cache memory, to jab bhi url search karoge, agar 
      cache me mil gayi to wahan se aayega, else server side se API le aayega.
      Problem with cache: Password bhi cache memory me chala jayega and cache memory is easily useable.
      Solution: Password ko GET nahi karte hain, POST karte hain(because POST is more secured).

body-parser
    -post me jab data encrypted form me ho, tab wo data 'req.body' me aata to hai, but use access nahi kar sakte(console me undefined hoga). To access that, we need body-parser.
    -we use body-parser to handle form data on POST request