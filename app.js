var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mongoose = require('mongoose'); // require dependencies mongoose
const mongoose = require('mongoose');
// parser
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientRouter = require('./routes/clients');
var articleRouter = require('./routes/articles');
var apiArticleRouter = require('./routes/api/article');

var app = express();

// set database connection
var mongo_db_url = 'mongodb+srv://handoko_db:171717@cluster0-yjrvv.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongo_db_url, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('Success connect to database! yeay!');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients',clientRouter);
app.use('/article',articleRouter);
app.use('/api/article',apiArticleRouter);

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