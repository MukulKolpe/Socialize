const express = require('express');
const router = express.Router();

const { getEvents,addEvent} = require('../controller/event');

router.route('/events').get(getEvents);
router.route('/addEvent').post(addEvent);


module.exports = router