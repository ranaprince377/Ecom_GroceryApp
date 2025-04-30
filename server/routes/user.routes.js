const express = require('express');
const authenticate = require('./../middlewares/auth.js');
const {
    getUserDetails,
    updateUser,
    createUser,
    loginUser,
    logout
} = require('./../controllers/userController.js');

const router = express.Router();

router.get('/', getUserDetails);
router.put('/', updateUser);
router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/logout', authenticate, logout);

module.exports = router;