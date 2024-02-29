const mongoose = require('mongoose');

const BedSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,

  },
  floor: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  charges: {
    type: String,
    required: true,
  },
}
);


const BedModel = mongoose.model('Bed', BedSchema);
module.exports = BedModel;
