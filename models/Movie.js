const  {Schema, model} = require("mongoose");

const movieSchema = new Schema ({
  title: {
    type: String,
    required: [true, "Debes mandar un título"]
  },
  genre:  {
    type: String,
    required: [true, "Debes agregar que genero es"]
  },
  images: {
    // [] es para poder agregar multiples urls
    type: [String], 
  }
}, { timestamps: true});

 module.exports = model("Movie", movieSchema);