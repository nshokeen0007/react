const mongoose = require('mongoose');

const DocSchema =new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  speciality: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const DocModel = mongoose.model('Doctor', DocSchema);

module.exports = DocModel;
