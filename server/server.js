const express = require("express")
const { mongoose } = require("mongoose")
const resStatus = require("express-res-status")

const { articlesController } = require("./controllers/articlesController")

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

app.get("/api", articlesController.getArticle)

app.get("/api/:id", articlesController.getArticleById)

app.get("/api/:key", articlesController.getArticleByKey)

app.post("/api/", articlesController.postArticle)

app.put("/api/:id", articlesController.putArticleById)

app.put("/api/:key", articlesController.putArticleByKey)
