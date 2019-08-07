const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    role: String
});

module.exports = mongoose.model('User', userSchema);