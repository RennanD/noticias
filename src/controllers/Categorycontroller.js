const Category = require("../models/Category");
const File = require("../models/File");

class CategoryController {
  async index(req, res) {
    const categories = await Category.find().populate("banner");

    return res.json(categories);
  }

  async store(req, res) {
    const { banner } = req.body;

    const imageExists = await File.findById(banner);

    if (!imageExists) return res.status(400).json({ error: "Banner inválido" });

    const category = await await Category.create(req.body);

    return res.json(category);
  }
}

module.exports = new CategoryController();
