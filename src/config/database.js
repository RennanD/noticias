const mongoose = require("mongoose");

const database = mongoose.connect("mongdb://localhost:27017/noticias-teste", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});

module.exports = database;
