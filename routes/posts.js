const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Other CRUD operations...

module.exports = router;