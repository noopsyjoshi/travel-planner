// Required packages
const express = require('express');

// Environment
const { port, dbURI } = require('./config/environment');

// Mongoose/MongoDB
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI, { useNewUrlParser: true });

// Set-up app
const app = express();
app.use(express.static(`${__dirname}/public`));

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

// Add CORS Headers
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(port, () => console.log(`Express is now listening on port ${port}...`));

module.exports = app;
