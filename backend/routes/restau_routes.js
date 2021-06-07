const express = require('express');
const router = express.Router();

const restauCtrl = require('../controllers/restau_controller');
const restau = require('./restau_routes');
const multer = require('../middleware/multer-config');

router.get('/', restauCtrl.getAllRestau);
router.get('/:id', restauCtrl.getOneSauce);



module.exports = router;

