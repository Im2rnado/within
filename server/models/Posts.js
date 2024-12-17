const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    title: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Array }
});

module.exports = mongoose.model("Posts", postSchema);