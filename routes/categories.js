const categoriesRouter = require("express").Router();

const {
  findAllCategories,
  findCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists,
  checkEmptyName,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryUpdated,
  sendCategoriesDeleted,
} = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  findCategoryById,
  updateCategory,
  sendCategoryUpdated
);

categoriesRouter.delete(
  "/categories/:id",
  deleteCategory,
  sendCategoriesDeleted
);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkEmptyName,
  checkIsCategoryExists,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  findCategoryById,
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
);

// routes/categories.js
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoriesDeleted
);

module.exports = categoriesRouter;
