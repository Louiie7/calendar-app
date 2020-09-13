const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  activity: {
    type: String,
    required:true
  },
  description: {
    type: String,
    required: true,
  },
})
module.exports = Activity = mongoose.model('activity', ActivitySchema);
