const express = require('express');
const router = express.Router();

const waterlevelController = require('../../controllers/water_level/waterlevelController');


//Post
router.post('/', waterlevelController.insert);
router.get('/', waterlevelController.show);


module.exports = router;
