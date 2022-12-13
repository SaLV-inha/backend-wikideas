const { ArticlesDAO } = require("../dao/articlesDao")
const { asDTO } = require("../dto/articlesDTO")

const dao = new ArticlesDAO()

const serviceEncyclopedia = {
  findById: async id => {
    let article = await dao.getById(id)

    !article
      ? (article = { message: "Artículo no encontrado" })
      : (article = { message: "200 OK", article })

    return article
  },
  getAll: async () => {
    const articles = await dao.getAll()

    const articlesDTO = asDTO(articles)
    console.log(articlesDTO)
    return articlesDTO
  },
  updateById: async ({ _id, name, body }) => {
    let result = await dao.getById(_id)
    !result
      ? (result = { message: "Artículo no encontrado" })
      : (result = await dao.update({ _id, name, body }))

    return result
  },
  deleteById: async id => {
    const result = await dao.deleteById(id)
    return result
  },
  addArticle: async article => {
    const result = await dao.add(article)
    return result
  },
}

module.exports = { serviceEncyclopedia }
