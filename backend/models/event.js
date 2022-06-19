const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [3, "Title must be at least 3 characters long"],
    maxlength: [30, "Title must be at most 30 characters long"],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, "Description must be at least 3 characters long"],
    maxlength: [500, "Description must be at most 500 characters long"],
  },
  date: {
    type: String,
    required: false,
    min: [new Date(), "Date must be in the future"],
  },
  time: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  createdBy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  theme: {
    type: String,
    enum: ["Sports", "Tech", "Art", "Music", "Food", "Literature", "Other"],
  },
  mode: {
    type: String,
    required: false,
  },
  totalAttendees: {
    type: Number,
    default: 50,
    required: false,
  },
  price: {
    type: Number,
    default: 0,
    required: false,
  },
});

module.exports = mongoose.model("Event", eventSchema);
