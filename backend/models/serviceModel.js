const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  type: {
    type: String,
    require: true,
  },
  statusOfPet: {
    type: String,
    require: true,
  },
  dateOfBooking: {
    type: Date,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  paymentInfo: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  paidAt: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  completedAt: Date,
});

module.exports = mongoose.model("Service", serviceSchema);
