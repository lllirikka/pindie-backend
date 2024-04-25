const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  devoloper: {
    type: String,
    required: true,
  },
  desription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const game = mongoose.model("game", gameSchema);

module.exports = game;
