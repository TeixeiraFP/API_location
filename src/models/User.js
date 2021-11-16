const mongoose = required("../database/db");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  adress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Adress",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
