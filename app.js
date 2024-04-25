const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const gamesRouter = require("./routes/games");
const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");
const connectToDataBase = require("./database/connect");

const PORT = 3000;
const app = express();
connectToDataBase();

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  gamesRouter,
  usersRouter,
  categoriesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
