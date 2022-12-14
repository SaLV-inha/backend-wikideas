const mongoose = require("mongoose")

const collection = "articles"

const schema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String, require: true, max: 50 },
  body: { type: String, require: true },
})

module.exports = mongoose.model(collection, schema)
