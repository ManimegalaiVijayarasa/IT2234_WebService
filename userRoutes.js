const express = require('express');
const router = express.Router();

const users = require('../DB/user');
const posts = require('../DB/posts');
const comments = require('../DB/comments');

// GET /user/summary/:id
router.get('/summary/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const postCount = posts.filter(post => post.authorId === userId).length;
    const commentCount = comments.filter(comment => comment.userId === userId).length;

    res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        "Number of Post": postCount,
        "Number of comments": commentCount
    });
});

// GET /users?username=john
router.get('/', (req, res) => {
    const { username } = req.query;

    let filtered = users;
    if (username) {
        filtered = users.filter(user => user.username.includes(username));
    }

    res.json(filtered);
});

module.exports = router;
