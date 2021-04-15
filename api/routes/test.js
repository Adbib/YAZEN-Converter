var express = require('express');
var router = express.Router();
const ytdl = require("ytdl-core")
const uploader = require('express-fileupload')
const fs = require("fs")
// const readline = require('readline');
const ffmpeg = require('ffmpeg');
// const multer = require('multer');
// const upload = multer({dest: 'public/uploads/'}).single('file');






router.post('/uploads', (req, res) => {
  const imageData = req.body
  const img64Data =imageData.base64image.toString()
  const fileName = req.body.Localimg.substring(0,req.body.Localimg.indexOf('.'))
  const format  =req.body.Format
  let a =  img64Data
  let m =  a.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  let b =  Buffer.from(m[2],'base64');
    
  switch (format) {
    case "JPEG":
      fs.writeFile(`public/uploads/${fileName}.jpg`,b,function(err){
        if(!err){
      res.send("file is created")
        }
      });
      break;
    case "PNG":
        fs.writeFile(`public/uploads/${fileName}.png`,b,function(err){
          if(!err){
        res.send("file is created")
          }
        });
        break;
    case "WEBP":
          fs.writeFile(`public/uploads/${fileName}.webp`,b,function(err){
            if(!err){
          res.send("file is created")
            }
          });
          break;
     case "GIF":
            fs.writeFile(`public/uploads/${fileName}.gif`,b,function(err){
              if(!err){
            res.send("file is created")
              }
            });
            break;
      
    default:
      break;
  }

});


/* Functions */
function downloadMp3({ mp3File, params: { id } }, res, next) {
  if ( mp3File ) {
   next()
  }
 
  ytdl.getInfo(`http://www.youtube.com/watch?v=${id}`, { quality: 'highestaudio' }, function(err, info) {
   var stream = ytdl.downloadFromInfo(info, {
    quality: 'highestaudio'
   })
 
   ffmpeg(stream)
   .audioBitrate(info.formats[0].audioBitrate)
   .withAudioCodec("libmp3lame")
   .toFormat("mp3")
   .saveToFile(`mp3/${videoId}.mp3`)
   .on("error", function(err) {
    console.log('error', err)
    res.json(err)
   })
   .on("end", function() {
    next() 
   })
  }) 
 }


/* Routes */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, user:"123"}
  ]);

// res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
// res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");


});

router.post('/?URL=:link', function(req, res, next) {

    const ido = req.path
     var yurl = `https://www.youtube.com/watch?v=${ido}`
    // var url = req.path;    
    // res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');    
    
    res.json(ytdl(yurl, {format: 'mp4'}).pipe(res));
  });


router.get('/:id', function(req, res, next) {
    const id = req.path.replace('/','');
    const yurl = `https://www.youtube.com/watch?v=${id}?quality=${req.query.quality}`;
async function getVideo(id){
  let info = await ytdl.getInfo(id);
  // let format = ytdl.chooseFormat(info.formats, { quality: '134' });
switch (req.query.quality) {
  case "MP4 360P":
    console.log("MP4 360P");
    // res.set("Content-Disposition", `attachment; filename=${info.videoDetails.title}.mp4`);
    // console.log('Content-Disposition', `attachment; filename=${info.videoDetails.title}.mp4`)
    const vidName = info.videoDetails.title 
    // console.log(viName.toString())
    res.header('Content-Disposition', `attachment; filename=video.mp4`);
    ytdl(yurl, {

      quality:"18"
    }).pipe(res)
    
    break;

  case "MP4 720P":
      console.log("MP4 720P");
      res.header('Content-Disposition', `attachment; filename=${info.videoDetails.title}.mp4`);
      ytdl(yurl, {
        format: 'mp4',
        quality:"22"
      }).pipe(res)
      break;

  case "MP4 1080P":
      console.log("MP4 1080P")
      res.header('Content-Disposition', `attachment; filename=${info.videoDetails.title}.mp4`);
      ytdl(yurl, {
        format: 'mp4',
        quality:"299"
      }).pipe(res)
      
      break;

  case "MP3":
        console.log("MP3");
        res.header('Content-Disposition', `attachment; filename=${info.videoDetails.title}.mp3`);
        ytdl(yurl, {
          format: 'mp3',
          quality:"140"
        }).pipe(res)
        break;

  default:
    console.log("no format selected")
    break;
}
}
function VidInfo(){
  try {
    getVideo(id)
  } catch (error) {
    console.log("error")
  } 

      

    }

    VidInfo(id)

  });


module.exports = router;
