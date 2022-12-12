const articles = require("../models/articles")
class ArticlesDAO {
  async getAll() {
    const articlesDB = await articles.find({})
    return articlesDB
  }

  async getById(id) {
    const article = await articles.findById(id)
    return article
  }

  async update({ _id, name, body }) {
    try {
      await articles.updateOne({ _id }, { $set: { name, body } })
      return { message: `El artículo id:${_id} ha actualizado con éxito` }
    } catch (error) {
      console.error("*************Error: ", error)
      return { message: `Error del servidor` }
    }
  }

  // async deleteById(id) {
  //   await articles.deleteOne({ _id })
  //   return { message: "Article deleted" }
  // }

  async add(article) {
    const articleDB = new articles(article)
    articleDB.save()

    return { message: "OK" }
  }
}

module.exports = { ArticlesDAO }
