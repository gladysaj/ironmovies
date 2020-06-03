const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  // Para indicar en donde va a colocar los archivos y las llaves de accesos para la operación
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDSECRET,
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "ironmovies",
  allowedFormats: ["jpg", "png", "jpeg"],
  filename(req, file, cb) {
    cb(null, file.originalname)
  }
});

module.exports = multer({ storage });
