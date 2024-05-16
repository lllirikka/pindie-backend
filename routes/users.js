const usersRouter = require("express").Router();

const {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  hashPassword,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
  "/users",
  findAllUsers,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put("/users/:id", findUserById, updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
usersRouter.post(
  "/users",
  checkEmptyNameAndEmailAndPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  createUser,
  sendUserCreated
);

// routes/users.js
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
