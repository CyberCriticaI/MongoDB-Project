const mongoose = require('mongoose');

// Define schema with validation rules
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create indexes
postSchema.index({ title: 1 });

// Create model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;