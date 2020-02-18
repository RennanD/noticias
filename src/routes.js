const routes = require("express").Router();
const multer = require("multer");
const FileController = require("./controllers/FileController");
const CategoryController = require("./controllers/CategoryController");
const NewsController = require("./controllers/NewsController");

const multerConfig = require("./config/multer");

const upload = multer(multerConfig);

routes.get("/files", FileController.index);
routes.post("/files", upload.single("file"), FileController.store);

routes.get("/categories", CategoryController.index);
routes.post("/categories", CategoryController.store);

routes.get("/news", NewsController.index);
routes.post("/news", NewsController.store);

module.exports = routes;
