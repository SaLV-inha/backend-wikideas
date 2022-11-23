const articles = require("../models/articles")

class ArticlesDAO {
  async getAll() {
    const articlesDB = await articles.find({})
    return articlesDB
  }
}

module.exports = { ArticlesDAO }
