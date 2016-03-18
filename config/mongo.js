
module.exports = {
  host: process.env.MONGO_DB_HOST || '127.0.0.1',
  port: process.env.MONGO_DB_PORT || 27017,
  user: process.env.MONGO_DB_USER || '',
  password: process.env.MONGO_DB_PASSWORD || '',
  database: process.env.MONGO_DB_TABLE || 'sample'
}
