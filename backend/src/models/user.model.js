const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [ true, "Username already exists"],
        required: true,
    },
    email: {
        type: String,
        unique: [true, "Account already exists"],
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("user", userSchema);

module.exports = User;