const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const path =require('path');
const routes = require('./routes');

class App{
    constructor(){
        this.server = express();
        
        mongoose.connect('mongodb+srv://devhouse:12345@cluster0.keoax.mongodb.net/devhouse?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );

        this.server.use(express.json());
    }
    routes(){
        this.server.use(routes);
    }
}

module.exports = new App().server;