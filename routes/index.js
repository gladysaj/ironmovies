const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const uploader = require('../helpers/cloudinary')

/* GET home page. */
router.get('/', (req, res) => {
  Movie.find()
  .then(result => {
    res.status(200).json({ result });
  })
  .catch(err=> res.status(400).json({ err }));
});

router.post('/', uploader.array("images"), (req,res) => {
  // aqui se podrá ver el url en la terminal siempre que se use el array, si usas uploader.single se coloca en req.file
  console.log(req.files);

  // obtener unicamente el url 
  const images = req.files.map((file) => file.path);
  // res.json(req.body);

  Movie.create({ ...req.body, images }).then((result) => {
    res.status(200).json({ result });
  });
});

module.exports = router;
