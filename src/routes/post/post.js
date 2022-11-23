import express from "express";

import postController from "../../controllers/post.js";

const router = express.Router();

router.get("/all", postController.index);

router.get("/:id", postController.show);

router.put("/:id", postController.edit);

router.delete("/:id", postController.delete);

export { router };
