const express=require("express");
const app=express();

const path = require("path");//nodejs deta hai to find path of current folder.

// console.log(__dirname);//gives the path of the app.

app.use('/', (req,res) => {
    res.sendFile(path.join(__dirname, "/public/Hello.txt"), "test.txt")//to send the file
})


// listens at a port
app.listen(5000);