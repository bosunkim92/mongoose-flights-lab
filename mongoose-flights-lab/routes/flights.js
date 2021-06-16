var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
// router.get('/:id', flightsCtrl.show);
router.get('/:id', function(req, res){
  console.log('correct get request is being used');
})
router.post('/', flightsCtrl.create);

module.exports = router;
