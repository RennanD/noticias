const File = require("../models/File");

class FileController {
  async index(req, res) {
    const files = await File.find();

    return res.json(files);
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path
    });

    return res.json(file);
  }
}

module.exports = new FileController();
