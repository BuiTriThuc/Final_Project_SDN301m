const mongoose = require("mongoose");
const shortId = require("di-short-mongo-id");
mongoose.plugin(require("mongoose-nanoid"), 12);

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  city: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  statusConfirm: {
    type: String,
    default: "Waiting"
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Pet", petSchema);
