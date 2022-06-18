const express = require('express');
const router = express.Router();

const {addUser,getUsers} = require('../controller/user');

router.route('/').get(getUsers);
router.route('/addUser').post(addUser);

module.exports = router;