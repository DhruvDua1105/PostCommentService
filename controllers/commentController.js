const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

exports.createComment = async (req, res) => {
      try {
            const { postId } = req.params;
            const { body } = req.body;
            const post = await Post.findById(postId);
            if (!post) {
                  return res.status(404).send({ error: 'Post not found' });
            }

            const comment = new Comment({ postId, body });
            await comment.save();
            res.redirect(`/posts/${postId}`);
      } catch (err) {
            res.status(400).send(err);
      }
};

exports.getCommentsByPostId = async (req, res) => {
      try {
            const { postId } = req.params;
            const comments = await Comment.find({ postId });
            res.status(200).send(comments);
      } catch (err) {
            res.status(400).send(err);
      }
};
