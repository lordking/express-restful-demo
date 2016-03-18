module.exports = {
  uri: process.env.MONGO_URI || 'mongodb://127.0.0.1/sample',
  options: {
    db: {
      native_parser: true
    },
    server: {
      poolSize: 5
    }
  }
}
