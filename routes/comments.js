const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:postId', commentController.createComment);
router.get('/:postId', commentController.getCommentsByPostId);

module.exports = router;
