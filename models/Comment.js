const mongoose = require('mongoose');

// Define schema with validation rules
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 1,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
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
commentSchema.index({ post: 1 });

// Create model
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;