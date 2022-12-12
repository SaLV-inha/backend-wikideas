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
app.listen(PORT, () => console.log(`RUNNING SERVER ON PORT: ${PORT}`))

app.get("/api", articlesController.getArticles)

app.get("/api/:_id", articlesController.getArticleById)

app.post("/api", articlesController.postArticle)

app.put("/api", articlesController.putArticleById)
