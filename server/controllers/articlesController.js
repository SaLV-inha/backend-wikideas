const { serviceEncyclopedia } = require("../services/serviceEncyclopedia")

const articlesController = {
  getArticleById: async (req, res) => {
    let { _id } = req.params

    const article = await serviceEncyclopedia.findById(_id)

    // if (!article) {
    //   return res.notFound(console.log("Articulo no encontrado"))
    //   //aqui no deberiamos mostrar el articulo de api?
    // }

    res.json({ message: "200 OK", article })
  },
  getArticle: async (req, res) => {
    const articles = await serviceEncyclopedia.getAll()
    res.ok({ message: "200 OK", articles })
  },
  postArticle: async (req, res) => {
    let { name, body } = req.body
    // if (!{ key, value }) {
    //   return res.badRequest(console.log("mal ingreso del usuario"))
    // }
    const articleNew = {
      name,
      body,
    }
    const result = serviceEncyclopedia.addArticle(articleNew)
    return res.json({ message: "200 OK", result: "Articulo creado" })
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
}

module.exports = { articlesController }
