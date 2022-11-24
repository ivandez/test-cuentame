import express from "express";
import postController from "../../controllers/post.js";
import postValidations from "../../utils/postValidation.js";

const router = express.Router();

router.get("/search-by-title", postController.searchByTitle);

router.get("/all", postController.index);

router.get("/:id", postController.show);

router.put("/:id", postValidations, postController.edit);

router.post("/", postValidations, postController.create);

router.delete("/:id", postController.delete);

router.get("/:postId/get-comments/", postController.getComments);

export { router };
