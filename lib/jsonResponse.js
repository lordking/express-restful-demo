'use strict';

module.exports = function(status, data) {

  this.status(status);

  if (status === 200) {
    return this.json({
      status: status,
      result: data
    });
  } else {
    return this.json({
      status: status,
      error: data
    });
  }
};
