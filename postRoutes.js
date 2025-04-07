const express = require('express');
const router = express.Router();

const users = require('../DB/user');
const posts = require('../DB/posts');
const comments = require('../DB/comments');

// GET /post/:id → Comments with full name
router.get('/:id', (req, res) => {
    const postId = req.params.id;

    const postComments = comments.filter(comment => comment.postId === postId);

    if (postComments.length === 0) {
        return res.status(404).json({ message: 'No comments found for the given post ID' });
    }

    const response = postComments.map(comment => {
        const user = users.find(u => u.id === comment.userId);
        return {
            commentator: user ? user.fullName : 'Unknown',
            comment: comment.content
        };
    });

    res.json(response);
});

// GET /posts?authorId=1&title=Yoga
router.get('/', (req, res) => {
    const { authorId, title } = req.query;

    let filtered = posts;

    if (authorId) {
        filtered = filtered.filter(post => post.authorId === authorId);
    }

    if (title) {
        filtered = filtered.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));
    }

    res.json(filtered);
});

module.exports = router;
