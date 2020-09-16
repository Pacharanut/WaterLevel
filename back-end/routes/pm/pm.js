const express = require('express');
const router = express.Router();

const pmController = require('../../controllers/pm/pmController');


//Post
router.post('/', pmController.insert);
router.get('/', pmController.show);


module.exports = router;
