const express = require("express");
const app=express();
const bodyParser = require("body-parser");

app.get("/getUsers", (req,res)=> {
    res.send("Hello World");
});
// end point is /getUsers

app.get("/getDetails", (req,res)=>{
    var detail ={
        name: "Rajat",
        age:21,
        college: "AKGEC- Ghaziabad",
    }

    res.send(detail);
});
// end point is "/getDetails"
// returning a JSON object.

app.get("/getMoreFunctions", (req,res,next) => {
    console.log("In First");
    next();//ye use kar ke next likha hua function pe chala jaata hai,
    //since hamara ye function, hamara important function(jisme
    // actual kaa ho raha hai), uske pehle execute ho raha hai, this is called
    // MIDDLEWARE.
}, (req,res) =>{
    res.status(200);
    res.json(req.query);
});


const checkAdmin = (req, res, next)=>{
    console.log(req.query);
    if(req.query.admin === 'true')
    {
        next();
    }
    else{
        res.status(400).send("must be admin");
    }
};
// app.use(checkAdmin);
app.use(bodyParser.urlencoded({extended: true}));//to handle form data in POST request
app.use(bodyParser.json)//to understand the json.
const sendRes = (req, res)=>{
    res.status(200)
    res.json(req.query)
};

app.post('/', (req,res) => {
    console.log('req body -> ', req.body);
    res.json({text: req.body});
})

app.get("/",sendRes);


app.listen(4000);// listening on port:4000