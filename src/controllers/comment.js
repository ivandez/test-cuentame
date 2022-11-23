import { validationResult } from "express-validator";
import Comment from "../models/Comment.js";

class CommentController {
  async index(req, res) {
    const comments = await Comment.findAll({
      attributes: ["id", "body", "user_name"],
    });

    res.status(200).send({ comments });
  }

  async show(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    try {
      const comment = await Comment.findByPk(id);

      res.status(200).send(comment);
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
    const { body } = req.body;

    try {
      const post = await Comment.findByPk(id);

      post.body = body;

      await post.save();
      res.status(200).send({ message: "Comment updated" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { body, PostId, user_name } = req.body;

    try {
      await Comment.create({ body, PostId, user_name });

      res.status(200).send({ message: "Comment created" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await Comment.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).send({ message: "Comment deleted!" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }
}

const commentController = new CommentController();

export default commentController;
