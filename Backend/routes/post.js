const router = require('express').Router();
const Post = require("../Models/post");
const auth = require('../Models/users');

// Get posts
router.get('/', auth, async (req, res) => {
  const posts = await Post.find({ author: req.user.id });
  res.json(posts);
});

// Create post
router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content, author: req.user.id });
  await newPost.save();
  res.status(201).json(newPost);
});

// Delete post
router.delete('/:id', auth, async (req, res) => {
  await Post.deleteOne({ _id: req.params.id, author: req.user.id });
  res.json({ message: 'Post deleted' });
});

// Edit post
router.put('/:id', auth, async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.findOneAndUpdate(
    { _id: req.params.id, author: req.user.id },
    { title, content },
    { new: true }
  );
  res.json(post);
});

module.exports = router;
