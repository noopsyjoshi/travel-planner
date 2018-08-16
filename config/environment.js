const PORT = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.DB_URI || `mongodb://localhost/traverse-${env}`;

module.exports = { PORT, dbURI };
