const express = require('express');
const router = express.Router();

const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')


/* GET users listing. */
router.post('/', AuthenticationControllerPolicy.register
    , AuthenticationController.register);
// router.get('/:id', deviceController.show);

// //Post
// router.post('/', deviceController.insert);

// //PUT
// router.put('/:id', deviceController.update);

// //DELETE
// router.delete('/:id', deviceController.destroy);

module.exports = router;
