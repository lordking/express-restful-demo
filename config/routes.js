'use strict';

const SampleController = require('../api/SampleController');

module.exports = {
  '/': SampleController.index,

  'post /sample/hello': SampleController.hello,
  'post /person/new': SampleController.createPerson,
  'get /person/:username': SampleController.findPerson,
  'put /person/:username': SampleController.updatePerson,
  'delete /person/:username': SampleController.deletePerson,
  'post /register': SampleController.registerSession,
}
