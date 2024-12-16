const CommentModel = require("../models/comment_model");

const createComment = async (req, res) => {
  try {
    const comment = new CommentModel({
      postId: req.body.postId,
      author: req.body.author,
      content: req.body.content
    });
    await comment.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCommentsByPostId = async (req, res) => {
  try {
    const comments = await CommentModel.find({ postId: req.params.postId });
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateComment = async (req, res) => {
  try {
    const updatedComment = await CommentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(updatedComment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const deleteComment = async (req, res) => {
  try {
    await CommentModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  createComment,
  getCommentsByPostId,
  updateComment,
  deleteComment
};