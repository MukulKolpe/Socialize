const express = require('express');
const router = express.Router();

const { getEvents,addEvent, filterMode ,filtertheme , indivisualEvent} = require('../controller/event');

router.route('/events').get(getEvents);
router.route('/addEvent').post(addEvent);
router.route('/filtermode').get(filterMode);
router.route('/filtertheme').get(filtertheme);
router.route('/:id').get(indivisualEvent);


module.exports = router