const express=require("express");
const app=express();


const path = require("path");//nodejs deta hai to find path of current folder.

// console.log(__dirname);//gives the path of the app.

app.set("views",path.join(__dirname, "views"));//path set kiya for jade
app.set("view engine", "jade");//HTML is a view; this ensures that view engine (given .jade file given in "app.set" line above) me jade use karna hai to change the content of the HTML file)
 
app.use('/', (req,res) => {
    // res.sendFile(path.join(__dirname, "/public/abcd.jpeg"))//to send the file

    // res.download(path.join(__dirname, "public/abcd.jpeg"), "mahaul.jpeg")// download() downloads the file mentioned, with the name we gave it for the frontend.

    // res.render("index", {title: "Express"})// to render the jade file from server side on the browser.

    //below code is an example for pipelining as well.
    res
    .status(201)//login karne pe status code bhejo 201
    .cookie("token", "test", {
        expire: new Date(Date.now()+ 8*60*60*1000 )
    })// frontend ko bola ek cookie set kar do token naam se jiski expiration hai 8 hrs
    .cookie("hello", "hello")//ye cookie set kiya hello naam se
    .redirect(301, "/admin")//redirect to /admin
})



// listens at a port
app.listen(5000);