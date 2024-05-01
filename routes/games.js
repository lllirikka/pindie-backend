const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameByid,
  updateGame,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameUpdated,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameByid, updateGame, sendGameUpdated);

module.exports = gamesRouter;
