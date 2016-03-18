'use strict';

// const GroupController = require('../app/controllers/GroupController');
// const SendMessageController = require('../app/controllers/SendMessageController');
// const SessionController = require('../app/controllers/SessionController');
//
const SampleController = require('../api/SampleController')

module.exports = {
  'post /sample/hello': SampleController.hello,
  'post /person/new': SampleController.createPerson,
  'get /person/:username': SampleController.findPerson,
  'put /person/:username': SampleController.updatePerson,
  'delete /person/:username': SampleController.deletePerson
}
