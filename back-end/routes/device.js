const express = require('express');
const router = express.Router();

const deviceController = require('../controllers/deviceController');


/* GET users listing. */
router.get('/', deviceController.index);
router.get('/:id', deviceController.show);

//Post
router.post('/', deviceController.insert);

//PUT
router.put('/:id', deviceController.update);

//DELETE
router.delete('/:id', deviceController.destroy);

module.exports = router;
