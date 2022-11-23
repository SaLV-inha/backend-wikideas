const express = require("express")
const { mongoose } = require("mongoose")
const resStatus = require("express-res-status")

const { serviceEncyclopedia } = require("./services/serviceEncyclopedia")

const app = express()
app.use(express.json())
app.use(resStatus())
require("dotenv").config()

try {
  mongoose.connect(process.env.URL_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB connected")
} catch (error) {
  res.internalServerError(console.log(error))
}

const PORT = process.env.PORT || 8080
app.listen(PORT, err => {
  if (err) throw new Error(err)
  return console.log(`Running server express ${PORT}`)
})

app.get("/api", async (req, res) => {
  const articles = await serviceEncyclopedia.getAll()
  res.ok({ message: "ok", articles: articles })
})

app.get("/api/:id", (req, res) => {
  let id = req.params.id
  if (serviceEncyclopedia.checkId(id) == false) {
    return res.notFound(console.log("mal ingreso del usuario"))
  }

  const article = serviceEncyclopedia.findArticleById(id)

  if (!article) {
    return res.notFound(console.log("Articulo no encontrado"))
    //aqui no deberiamos mostrar el articulo de api?
  }
  res.json(dto)
  return res.ok(console.log("Muartestra articulo de la api"))
})

app.get("/api/:key", (req, res) => {
  let key = req.params.key
  if (!{ key, value }) {
    return res.notFound(console.log("mal ingreso del usuario"))
  }
  return res.ok(console.log("Articulo encontrado"))
})

app.post("/api/", (req, res) => {
  let { key, value } = req.body
  if (!{ key, value }) {
    return res.badRequest(console.log("mal ingreso del usuario"))
  }
  return res.created(console.log("Articulo encontrado"))
})

app.put("/api/:id", (req, res) => {
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
})

app.put("/api/:key", (req, res) => {
  let key = req.params.key
})
