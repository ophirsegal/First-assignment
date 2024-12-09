const PostModel = require("../models/post_models");

const getAllPosts = async (req, res) => {
  const filter = req.query.owner;
  try {
    if (filter) {
      const posts = await PostModel.find({ owner: filter });
      res.send(posts);
    } else {
      const posts = await PostModel.find();
      res.send(posts);
    }

  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await PostModel.findById(postId);
    if (post != null) {
      res.send(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createPost = async (req, res) => {
  const postBody = req.body;
  try {
    const post = await PostModel.create(postBody);
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostsBySender = async (req, res) => {
  const sender = req.query.sender;
  try {
    const posts = await PostModel.find({ sender: sender });
    res.send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
  
const updatePost = async (req, res) => {
  try {
    const post = await postModel.findByIdAndUpdate(
      req.params.id, 
      req.body,      
      { new: true }  
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  getPostsBySender,
  updatePost
};