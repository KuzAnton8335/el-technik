const mongoose = require("mongoose");

const UserRegSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
});

module.exports = mongoose.model("UserReg", UserRegSchema);
