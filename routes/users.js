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
} = require("../controllers/users");

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

module.exports = usersRouter;
