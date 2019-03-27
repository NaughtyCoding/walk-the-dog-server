const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  title: {
    type: mongoose.SchemaTypes.String,
  },
  text: {
    type: mongoose.SchemaTypes.String,
  },
  image: {
    type: mongoose.SchemaTypes.String,
  },
  bookmarked: {
    type: mongoose.SchemaTypes.Boolean,
  },
  bezirk: {
    type: mongoose.SchemaTypes.String,
  },
  switch: {
    type: mongoose.SchemaTypes.Boolean,
  },
  rating: {
    type: mongoose.SchemaTypes.Number,
  },
  hundeführerschein: {
    type: mongoose.SchemaTypes.String,
  },
  lat: {
    type: mongoose.SchemaTypes.Mixed,
  },
  lng: {
    type: mongoose.SchemaTypes.Mixed,
  },
})

module.exports = mongoose.model('Card', CardSchema)
