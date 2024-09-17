const mongoose = require('mongoose');

// Define schema with validation rules
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/, // Basic email format validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    // Additional fields can be added here
});

// Create indexes
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;