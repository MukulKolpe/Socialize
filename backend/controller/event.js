const Event = require('../models/event')
const asyncHandler = require('express-async-handler')

const getEvents = async (req, res) => {
  res.status(200).json(await Event.find())
}

const addEvent = asyncHandler(async(req,res) => {
    const {title, description, date, time, location, totalAttendees, price,mode} = req.body
    const eventExist = await Event.findOne({title})
    if(eventExist){
        res.status(400)
        throw new Error('Event already exist')
    }
    const event = await Event.create({title, description, date, time, location, totalAttendees, price,mode})

    if(event){
        res.status(201).json({
            _id: event._id,
            title: event.title,
            description: event.description,
            date: event.date,
            time: event.time,
            mode: event.mode,
            location: event.location,
            totalAttendees: event.totalAttendees,
            price: event.price
        })
    } else{
        res.status(400)
        throw new Error('Event not created')
    }
})

module.exports = {getEvents,addEvent};