const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    image: {
        type: String,
        required: false
    },
    interests:{
        type: [String],
        enum:['Sports','Tech','Art','Music','Food','Literature','Other']
    },
    events:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Event',
    }

})

module.exports = mongoose.model('User', userSchema)