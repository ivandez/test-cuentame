import { validationResult } from "express-validator";
import Post from "../models/post.js";
import Comment from "../models/Comment.js";

class PostController {
  async index(req, res) {
    const posts = await Post.findAll();

    res.status(200).send({ posts });
  }

  async show(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    try {
      const post = await Post.findByPk(id);

      res.status(200).send(post);
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async edit(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { title, body } = req.body;

    try {
      const post = await Post.findByPk(id);

      post.title = title;

      post.body = body;

      await post.save();
      res.status(200).send({ message: "Post updated" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, body, img } = req.body;
    console.log(
      "🚀 ~ file: post.js ~ line 59 ~ PostController ~ create ~ req.file",
      req.file
    );

    try {
      // await Post.create({ title, body });

      res.status(200).send({ message: "post created" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await Post.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).send({ message: "Post deleted!" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async getComments(req, res) {
    const { postId } = req.params;

    const comments = await Comment.findAll({ where: { PostId: postId } });

    res.status(200).send({ comments });
  }
}

const postController = new PostController();

export default postController;
