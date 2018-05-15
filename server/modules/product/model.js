let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: String,
  group: String,
  description: String,
  code: String,
  url: String
});

module.exports = mongoose.model('Product', ProductSchema);
