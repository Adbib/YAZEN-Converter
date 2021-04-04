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
const imagesToPdf = require("images-to-pdf")

// router.get('/', (req, res)=>{
//     res.send("works")
// });
router.post('/', (req, res) => {
    const file = req.files.file
    const  convert2PDF = async () =>{
        await imagesToPdf([path.join(__dirname, `../public/uploads/`)+file.name], path.join(__dirname, `../public/uploads`)+"/combined.pdf")
        
    }
    file.mv(`./public/uploads/${file.name}`,function(err) {
        if (err){
          return res.status(500).send(err)
        };
        convert2PDF()
          res.send(`${req.headers.host}/static/uploads`+"/combined.pdf");
      })

});





module.exports = router;
