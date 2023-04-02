const { Comment } = require('../models');

const getCommentsById = async (id) => {
  const comments = await Comment.findAll({
    where: { accountId: id },
  });
  return comments;
};

const createComment = async (accountId, message) => {
  const comment = await Comment.create({
    message,
    upvoting: 0,
    downvoting: 0,
    accountId,
  });
  return comment;
};

module.exports = { getCommentsById, createComment };
