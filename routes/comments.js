const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// GET all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Other CRUD operations...

module.exports = router;