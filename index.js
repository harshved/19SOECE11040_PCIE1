const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = process.env.PORT || 3000;
const url = "mongodb+srv://harsh:harsh@pcie.nh3gv.mongodb.net/pcie?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true}).then(() => { // if connected successfully
    console.log('Database Successfully Connected...'); 

    const app = express(); // initializing our app
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(routes);

    app.get('/', (req, res) => {
        res.sendFile('index.html',{root:__dirname});
    })
    
    app.listen(port, () => {    // starting server
        console.log('Server Started');
    });
    

}).catch((event) => {   // else catch the error, i.e. exception handling
    console.log(event.toString());
})