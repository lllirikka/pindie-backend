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
  sendGameById,
} = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameByid, sendGameById);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameByid, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);
gamesRouter.post(
  "/games",
  findAllGames,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameByid,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
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
