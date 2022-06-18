const asyncHandler = require('express-async-handler')
const User = require('../models/user')

const getUsers = asyncHandler(async (req, res) => {
       res.status(200).json(await User.find())
})

const addUser = asyncHandler(async (req,res) => {
    const {name,email,interests ,image,events} = req.body;
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400);
        throw new Error('User already exist')
    }

    const user = await User.create({name,email,interests,image,events});

    if(user){
        res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        interests: user.interests,
        events: user.events
    })

    }else {
        res.status(400)
        throw new Error('User not created')
    }
})

module.exports = {addUser , getUsers}
