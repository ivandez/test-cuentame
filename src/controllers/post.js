import { validationResult } from "express-validator";
import Post from "../models/post.js";
class PostController {
  index(req, res) {
    res.send("get all posts from controller testing");
  }

  show(req, res) {
    res.send(`get one post with id ${req.params.id}`);
  }

  edit(req, res) {
    res.send(`edit post with id ${req.params.id}`);
  }

  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, body } = req.body;

    try {
      await Post.create({ title, body });

      res.status(200).send("post created");
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  delete(req, res) {
    res.send(`delete a post with id ${req.params.id}`);
  }
}

const postController = new PostController();

export default postController;
