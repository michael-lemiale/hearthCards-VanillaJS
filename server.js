const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const port = 3000;

// const routes = require('./app/routes');

require('./app/routes')(app, {});

if (app.listen(port)) {
	console.log("Live on port: " + port);
};
