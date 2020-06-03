const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page. */
router.get('/', (req, res) => {
  Movie.find()
  .then(result => {
    res.status(200).json({ result });
  })
  .catch(err=> res.status(400).json({ err }));
});

router.post('/', (req,res) => {
  res.json(req.body);
  // Movie.create
})

module.exports = router;
