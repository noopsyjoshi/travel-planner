const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.DB_URI || `mongodb://localhost:27017/traverse-${env}`;
const secret = process.env.SECRET || 'wdi35';

module.exports = { port, dbURI, secret };
