const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  payment: {
    type: String,
    required: true
  },
  paymentstatus: {
    type: String,
    required: true
  }
});

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);
module.exports = AppointmentModel;
