let express = require('express');
let router = express.Router();

let article_controller = require('../controllers/articleController');

router.get('/', article_controller.index);
router.get('/create', article_controller.create);

router.post('/create_article', article_controller.create_article);
router.get('/detail/:articleId', article_controller.detail);
router.get('/delete/:articleId', article_controller.delete);
router.get('/update/:articleId',article_controller.update)
// router.get('/edit/:id', article_controller.edit);
// router.post('/edit_article', article_controller.edit_article);


module.exports = router;
