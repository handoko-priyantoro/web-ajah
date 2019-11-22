const Article = require('../../models/article');

exports.list_articles = (req, res, next)=> {
    Article.find({}, (err, result) =>{
      res, send({
        status:'SUCCES',
        result: result,
        error:null
    });
 })
};