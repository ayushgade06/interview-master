const mongoose = require("mongoose");

const tokenBlacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const tokenBlacklist = mongoose.model("tokenBlacklist", tokenBlacklistSchema);

module.exports = tokenBlacklist;