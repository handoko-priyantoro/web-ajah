var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleScheme= new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true }
  }
);

module.exports = mongoose.model('article',articleScheme);

