const { serviceEncyclopedia } = require("../services/serviceEncyclopedia")

const articlesController = {
  getArticleById: async (req, res) => {
    let id = req.params.id

    const article = serviceEncyclopedia.findById(id)

    if (!article) {
      return res.notFound(console.log("Articulo no encontrado"))
      //aqui no deberiamos mostrar el articulo de api?
    }
    res.json(dto)
    return res.ok(console.log("Muartestra articulo de la api"))
  },
  getArticle: async (req, res) => {
    const articles = await serviceEncyclopedia.getAll()
    res.ok({ message: "ok", articles: articles })
  },
  getArticleByKey: async (req, res) => {
    let key = req.params.key
    if (!{ key, value }) {
      return res.notFound(console.log("mal ingreso del usuario"))
    }
    return res.ok(console.log("Articulo encontrado"))
  },
  postArticle: async (req, res) => {
    let { key, value } = req.body
    if (!{ key, value }) {
      return res.badRequest(console.log("mal ingreso del usuario"))
    }
    return res.created(console.log("Articulo encontrado"))
  },
  putArticleById: async (req, res) => {
    let id = req.params.id
    let { name, body } = req.body
    const article = serviceEncyclopedia.findArticleById(id)
    if (!article) {
      return res.notFound(console.log("Articulo no encontrado"))
      //aqui no deberiamos mostrar el articulo de api?
    }
    if (!req.body) {
      return res.badRequest(
        console.log("Debe ingresa un nombre y un cuerpo del articulo")
      )
    }
    //aqui va la misma logica del posto con los valores que toma del {name, body}
  },
  putArticleByKey: async (req, res) => {
    let key = req.params.key
  },
}

module.exports = { articlesController }
