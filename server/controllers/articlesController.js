const { serviceEncyclopedia } = require("../services/serviceEncyclopedia")

const articlesController = {
  getArticleById: async (req, res) => {
    let { _id } = req.params

    const article = await serviceEncyclopedia.findById(_id)

    res.json(article)
  },
  getArticles: async (req, res) => {
    const articles = await serviceEncyclopedia.getAll()
    res.ok({ message: "200 OK", articles })
  },
  postArticle: async (req, res) => {
    let { name, body } = req.body

    const articleNew = {
      name,
      body,
    }
    const result = serviceEncyclopedia.addArticle(articleNew)
    return res.json({ message: "200 OK", result: "Articulo creado" })
  },
  putArticleById: async (req, res) => {
    let { _id, name, body } = req.body

    const article = {
      _id,
      name,
      body,
    }

    const result = await serviceEncyclopedia.updateById(article)
    res.json(result)
  },
}

module.exports = { articlesController }
