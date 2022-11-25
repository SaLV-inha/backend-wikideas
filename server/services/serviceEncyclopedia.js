const { ArticlesDAO } = require("../dao/articlesDao")

const dao = new ArticlesDAO()

const serviceEncyclopedia = {
  findById: async id => {
    const article = await dao.getById(id)
    return article
  },
  getAll: async () => {
    const articles = await dao.getAll()
    return articles
  },
  updateById: async article => {
    const result = await dao.update(article)
    return result
  },
  deleteById: async id => {
    const result = await dao.deleteById(id)
    return result
  },
}

module.exports = { serviceEncyclopedia }
