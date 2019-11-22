let Client = require('../models/client')

exports.index = function(req, res, next){
  Client.find({},function(err, result){
    if (err) console.log(err);
    res.render('clients/index',{data: result});
  });
};

exports.create = function(req, res, next){
  res.render('client/create');
};

