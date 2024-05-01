const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate({ path: "users", select: "-password" });
  next();
};

const createGame = async (req, res, next) => {
  try {
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error creating game" });
  }
};

const findGameByid = async (req, res, next) => {
  try {
    req.game = games
      .findById(req.params.id)
      .populate("categories")
      .populate(users);
    next();
  } catch (error) {
    res.status(404).send({ message: "Game not found" });
  }
};

const updateGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
  } catch (error) {
    res.status(400).send({ message: "Error updating game" });
  }
};

module.exports = { findAllGames, createGame, findGameByid, updateGame };
