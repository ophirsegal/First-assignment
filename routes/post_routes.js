const express = require("express");
const router = express.Router();
const Post = require("../controllers/post_controllers");

router.get("/", Post.getAllPosts);

router.get("/:id", Post.getPostById);

router.get("/by-sender", Post.getPostsBySender);

router.post("/", Post.createPost);

router.put("/:id", Post.updatePost);

module.exports = router;