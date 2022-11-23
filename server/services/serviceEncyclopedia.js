const { ArticlesDAO } = require("../dao/articlesDao")
const articles = require("../models/articles")

const dao = new ArticlesDAO()

const serviceEncyclopedia = {
  findArticleById: id => {},
  getAll: async () => {
    const articles = await dao.getAll()
    return articles
  },
}

module.exports = { serviceEncyclopedia }
