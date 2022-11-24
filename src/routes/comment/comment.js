import express from "express";
import commentController from "../../controllers/comment.js";
import {
  commentShowValidations,
  commentCreateValidations,
  commentUpdateValidations,
} from "../../utils/commentValidation.js";

const router = express.Router();

router.get("/all", commentController.index);

router.get("/:id", commentShowValidations, commentController.show);

router.put("/:id", commentUpdateValidations, commentController.edit);

router.post("/", commentCreateValidations, commentController.create);

router.delete("/:id", commentController.delete);

export { router };
