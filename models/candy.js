import mongoose from 'mongoose'

//optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const candySchema = new Schema({
  text: String,
  inPantry: Boolean,
})

// Compile the schema into a model and export it
const Candy = mongoose.model('Candy', candySchema)

export {
  Candy
}