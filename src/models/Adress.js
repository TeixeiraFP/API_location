const mongoose = require("../database/db");

const AdressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Adress = mongoose.model("Adress", AdressSchema);

module.exports = Adress;
