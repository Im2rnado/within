const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: String, enum: ["student", "admin"], default: "student" },
    profilePicture: {type: String} /*url to image*/
});

module.exports = mongoose.model("Users", userSchema);