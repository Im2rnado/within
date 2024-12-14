const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
    percentage: { type: Number, required: true },
    company: { type: String, required: true },
    code: { type: String, required: true }
});

module.exports = mongoose.model("Offers", offerSchema);