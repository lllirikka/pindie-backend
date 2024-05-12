const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameByid,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameByid, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);
gamesRouter.post(
  "/games",
  findAllGames,
  checkEmptyFields,
  createGame,
  sendGameCreated
);


gamesRouter.put(
  "/games/:id",
  findGameByid,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  createGame,
  sendGameCreated
);

module.exports = gamesRouter;
