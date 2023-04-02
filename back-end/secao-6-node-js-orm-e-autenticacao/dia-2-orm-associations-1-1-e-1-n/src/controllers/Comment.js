const commentService = require('../services/Comment');

const getCommentsById = async (req, res) => {
  const { id } = req.params;

  const comments = await commentService.getCommentsById(id);

  if (!comments.length) {
    return res.status(404).json({ message: 'No comments registered' });
  }
  return res.status(200).json(comments);
};

const createComment = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  const newComment = await commentService.createComment(id, message);

  if (!newComment) {
    return res.status(404).json({ message: 'Error adding comment' });
  }
  return res.status(200).json({ message: 'Account successfully registered' });
};

module.exports = { getCommentsById, createComment };
