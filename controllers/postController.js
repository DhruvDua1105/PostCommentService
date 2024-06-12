const Post = require('../models/postModel');
const Comment = require('../models/commentModel')

exports.createPost = async (req, res) => {
      try {
            const { title, body } = req.body;
            if (!title || !body) {
                  return res.status(400).send({ error: 'Title and body are required' });
            }
            const post = new Post({ title, body });
            await post.save();
            res.redirect("/posts")
      } catch (err) {
            res.status(400).send(err);
      }
};

exports.getPosts = async (req, res) => {
      try {
            const posts = await Post.find();
            res.render('index', { posts });
      } catch (err) {
            res.status(400).send(err);
      }
};


exports.getPostById = async (req, res) => {
      try {
            const post = await Post.findById(req.params.id);
            const postId  = req.params.id;
            const comments = await Comment.find({ postId });
            res.render('post', { post, comments });
      } catch (err) {
            res.status(400).send(err);
      }
};