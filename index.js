const express = require('express');
const app = express();
const PORT = 8080;

// Routes
const userRoutes = require('./ROUTES/userRoutes');
const postRoutes = require('./ROUTES/postRoutes');



app.use('/user', userRoutes);
app.use('/users', userRoutes);     // for /users?username=
app.use('/post', postRoutes);
app.use('/posts', postRoutes);     // for /posts?authorId=&title=

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
