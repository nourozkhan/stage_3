const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect("mongodb://nouroz:Shazzmart1@ds049211.mlab.com:49211/native-todo")

mongoose.connect("mongodb://nouroz:Shazzmart1@ds129024.mlab.com:29024/stage3")
//if(process.env.NODE_ENV !== 'test'){

//mongoose.connect('mongodb://localhost/todoApp');
//}
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  next();
});
routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

module.exports = app ;
