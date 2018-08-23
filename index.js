// Required packages
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./config/routes');
const errorHandler = require('./lib/errorHandler');
const morgan = require('morgan');
// Environment
const { port, dbURI } = require('./config/environment');

// Mongoose/MongoDB
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI, { useNewUrlParser: true });

// Set-up app
const app = express();
app.use(express.static(`${__dirname}/public`));

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

// Add CORS Headers
// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use('/api', router);
app.use(errorHandler);

app.listen(port, () => console.log(`Express is now listening on port ${port}...`));

module.exports = app;
