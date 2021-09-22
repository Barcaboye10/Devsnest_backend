const express = require('express');
const app = express();//express() passes a function definition


// security, performance, edgecases

app.get('/',(req, res) => {
    res.status(500).send("Database not connecting");//pipelining
});

// app.get('/products', (req, res) => {
//     res.send(req.query.text" );
// })

app.get('/user/:uID/book/:bID', (req,res) => {
    console.log(req.query);
    res.send(req.params);
})

app.listen(5000);//listens to the given port.