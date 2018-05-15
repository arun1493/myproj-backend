let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: String,
  // title: String,
  // description: String,
  // code: String,
  // imageUrl: String
});

module.exports = mongoose.model('Product', ProductSchema);
