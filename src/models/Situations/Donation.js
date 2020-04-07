const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  donateBy: String,
  donateTo: String,
  status: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    defalt: Date.now()
  }
})

module.exports = mongoose.model('Job', JobSchema)