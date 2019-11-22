let express = require('express');
let router = express.Router();
let client_controller = require('../controllers/clientController');


//localhost:3000/clients
router.get('/', client_controller.index);
router.get('/create', client_controller.create);

//export modul
module.exports = router;
