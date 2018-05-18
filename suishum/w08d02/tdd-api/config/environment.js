const env = process.env.NODE_ENV || 'dev';
const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/wdi32-places-${env}`;
const secret = process.env.SECRET || '*Ghs/L@Banana';

module.exports = { env, port, dbURI, secret };
