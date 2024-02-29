const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  charges: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

const ServiceModel = mongoose.model('Service', serviceSchema);
module.exports = ServiceModel;
