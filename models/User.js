const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    spotify: {
        spotifyId: { type: String, unique: true, sparse: true },
        accessToken: String,
        refreshToken: String,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;