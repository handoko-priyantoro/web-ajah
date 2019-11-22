var express = require('express');
var router = express.Router();

// require controller
var application_controller = require('../controllers/applicationController.js');

// routes
router.get('/', application_controller.home);
router.get('/about', application_controller.about);
router.get('/contact', application_controller.contact);
// router.get('/create',aplication_controller.create);
// router.get('/create_article',aplication_controller.create_article);


module.exports = router;
