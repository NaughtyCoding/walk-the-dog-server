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
    type: mongoose.SchemaType.Boolean,
  },
  bezirk: {
    type: mongoose.SchemaType.String,
  },
  switch: {
    type: mongoose.SchemaType.Boolean,
  },
  rating: {
    type: mongoose.SchemaType.String,
  },
  hundeführerschein: {
    type: mongoose.SchemaType.String,
  },
  lat: {
    type: mongoose.SchemaType.String,
  },
  lng: {
    type: mongoose.SchemaType.String,
  },
})

module.exports = mongoose.model('Card', CardSchema)
