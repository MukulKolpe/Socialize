const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {    
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title must be at least 3 characters long'],
        maxlength: [30, 'Title must be at most 30 characters long']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Description must be at least 3 characters long'],
        maxlength: [500, 'Description must be at most 500 characters long'] 
    },
    date: {
        type: String,
        required: [true, 'Date is required'],
        min: [new Date(), 'Date must be in the future']
    },
    time: {
        type: String,
        required: [true, 'Time is required'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    mode:{
        type: String,
        required: [true, 'Mode is required'],
    },
    totalAttendees: {
        type: Number,
        default: 50,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: false
    }

})

module.exports = mongoose.model('Event', eventSchema)