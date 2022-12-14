import { body } from "express-validator";

const postValidations = [
  body("title").notEmpty(),
  body("title").isLength({ max: 100 }),
  body("body").notEmpty(),
  body("body").isLength({ max: 255 }),
];

export default postValidations;
