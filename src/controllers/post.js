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

  create(req, res) {
    res.send("create a post");
  }

  delete(req, res) {
    res.send(`delete a post with id ${req.params.id}`);
  }
}
const postController = new PostController();

export default postController;
