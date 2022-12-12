class articleDTO {
  constructor({ id, name, body }) {
    this.id = id
    this.name = name
    this.body = body
  }
}

const asDTO = articles => {
  if (Array.isArray(articles)) {
    return articles.map(article => new articleDTO(article))
  } else {
    return new articleDTO(articles)
  }
}

module.exports = { asDTO }
