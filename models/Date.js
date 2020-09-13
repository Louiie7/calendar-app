const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateSchema = new Schema({
  date: {
    type: String,
    required:true
  },
  activities: {
    type: Array,
    required:false
  },
  timespan: {
    type: Array,
    required: false
  }
})

module.exports = date = mongoose.model('date', DateSchema);
