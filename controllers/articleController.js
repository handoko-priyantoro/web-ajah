let Article = require('../models/article.js');

exports.index = function(req, res, next){
  Article.find({}, function(err, results){
    if(err) console.log(err);
    res.render('article/index', { data: results });
  })    
}
exports.create = function(req, res, next){
   res.render('article/create'); 
}

exports.create_article = function(req, res, next){
    let article = new Article(req.body);
    
// insert data to database
    article.save(function(err, results){
        if(err){
            console.log(err.message);
        } else {
            console.log(req.body);
            res.redirect('/article');
        }
    })
 }

 exports.update = function(req, res, next){
    let articleId = req.params.articleId;
    console.log(articleId)
    Article.findOne({ _id:articleId }, function(err, results){
        res.render('article/update', {
            data:results
        });
        console.log(result);
    }) 
 } 
 exports.detail = function(req, res, next){
    let params = req.params;
    Article.findOne({ _id: params.articleId }, function(err, results){
        res.render('article/detail', {
            data:results
        });
    }) 
 }
 exports.delete = function(req, res, next){
    let articleId = req.params.articleId;
    Article.findOneAndDelete({ _id: articleId }, function(err, results){
        if (err){
        res.render('article?message=failed delete article!'); 
        }else{ 
        res.render('article?message=succes delete article!'); }  
        })
    }; 
 

 exports.create = function(req, res, next){
    let id = req.params.id;
    Article.findOne({ _id: id}, function(err, results){
        if(err) throw err;
        res.render('articles/create', { 
            data: results 
        });
    }) 
 }

//  exports.edit_article = function(req, res, next){
//     var myquery = { _id: req.body._id };
//     var newvalues = { $set: {
//         title: req.body.title, 
//         author: req.body.author,
//         description: req.body.description 
//     } };
    
    // insert data to database
    // Article.updateOne(myquery, newvalues, function(err, results){
    //     if(err){
    //         console.log(err.message);
    //     } else {
    //         res.redirect('/articles');
    //     }
    // });

//  exports.delete = function(req, res, next){
//     let id = req.params.id;
//     Article.deleteOne({ _id: params.articleId}, function(err, results){
//         if(err){
//             console.log(err.message);
//         } else {
//             console.log('Data berhasil dihapus!');
//             res.redirect('/articles');
//         }
//     }) 
//  }