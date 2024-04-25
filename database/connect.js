const moongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/pindie";

async function connectToDataBase() {
  try {
    await moongoose.connect(DB_URL);
    console.log("Успешно");
  } catch (error) {
    console.log("Не успешно");
    console.log(err);
  }
}

module.exports = connectToDataBase;
