const mongoose = require("mongoose")

const collection = "articles"

const schema = new mongoose.Schema({
  name: { type: String, require: true, max: 50 },
  body: { type: String, require: true },
})

module.exports = mongoose.model(collection, schema)
