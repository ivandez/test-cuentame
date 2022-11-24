import { body, param } from "express-validator";

const commentCreateValidations = [
  body("body").notEmpty(),
  body("body").isLength({ max: 255 }),
  body("user_name").notEmpty(),
  body("user_name").isLength({ max: 45 }),
  body("PostId").notEmpty(),
  body("PostId").isInt(),
];

const commentUpdateValidations = [
  body("body").notEmpty(),
  body("body").isLength({ max: 255 }),
];

const commentShowValidations = [param("id").isInt(), param("id").notEmpty()];

export {
  commentCreateValidations,
  commentShowValidations,
  commentUpdateValidations,
};
