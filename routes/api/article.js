const express = require('express');
const router = express.Router();

const api_article_controller = require('../../controllers/api/articlesController');

router.get('/', api_article_controller.list_articles)

module.exports = router;