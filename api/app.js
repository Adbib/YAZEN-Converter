var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const fileUpload = require('express-fileupload');
const body = require('body-parser')
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/test");
var imgConverter = require('./routes/imgConverter')
 var img2pdf = require('./routes/img2pdf')

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://localhost:3000");
  next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(fileUpload({
  createParentPath: true
 
}));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/download", testAPIRouter);
app.use("/upload", imgConverter);
app.use("/img2pdf", img2pdf);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
