const express = require('express');
const router = express.Router();

const { getEvents,addEvent, filterMode ,filtertheme} = require('../controller/event');

router.route('/events').get(getEvents);
router.route('/addEvent').post(addEvent);
router.route('/filtermode').get(filterMode);
router.route('/filtertheme').get(filtertheme);


module.exports = router