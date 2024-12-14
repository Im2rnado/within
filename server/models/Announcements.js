const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    title: { type: String, required: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model("Announcements", announcementSchema);