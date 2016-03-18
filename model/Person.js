var mongoose = require('mongoose');

module.exports = function(db) {

  var schema = new mongoose.Schema({

    username: {
      type: String,
      index: true,
      required: '{PATH} is required!'
    },
    appCode: {
      type: String,
      required: '{PATH} is required!'
    }
  }, {
    versionKey: false
  });

  db.model('Person', schema, 'person');
};
