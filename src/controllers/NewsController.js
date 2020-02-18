const Category = require("../models/Category");
const File = require("../models/File");
const NewsModel = require("../models/News");

class NewsController {
  async index(req, res) {
    const newses = await NewsModel.find().populate(["banner", "category"]);

    return res.json(newses);
  }

  async store(req, res) {
    const { category, banner } = req.body;

    const categoryExists = await Category.findById(category);
    const imageExists = await File.findById(banner);

    if (!categoryExists)
      return res.status(400).json({ error: "A categoria não existe" });

    if (!imageExists) return res.status(400).json({ error: "Banner inválido" });

    const news = await await NewsModel.create(req.body);

    return res.json(news);
  }
}

module.exports = new NewsController();
