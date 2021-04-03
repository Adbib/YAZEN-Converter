var express = require('express');
var router = express.Router();
const uploader = require('express-fileupload')
const fs = require("fs")
const ffmpeg = require('ffmpeg');
const multer = require('multer');
const { route } = require('.');
const upload = multer({dest: 'public/uploads/'}).single('file');
const Jimp = require("jimp")
const path = require('path')


router.get('/', (req, res)=>{
    res.send("works")
});
router.post('/images/:Format', (req, res) => {
    const file = req.files.file
    const Format = req.params.Format
    // console.log(Format)
    file.mv(`./public/uploads/${file.name}`,function(err) {
        if (err){
          return res.status(500).send(err)
        };
    
        Jimp.read( path.join(__dirname, `../public/uploads/`)+file.name , function (err, image) {
            if (err) {
            console.log(err)
            } else {
            image.write(path.join(__dirname, `../public/uploads/`)+"new-image." + `${Format.toLowerCase()}`)
            }
        })
          res.send(`${req.headers.host}/static/uploads/new-image.` + `${Format.toLowerCase()}`);
        // res.send(req)
      })

});





module.exports = router;
