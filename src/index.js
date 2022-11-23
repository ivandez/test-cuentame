import express from "express";
import logger from "morgan";
import sequelize from "./db/dbConnection.js";
import multer from "multer";

const upload = multer();

// Routers
import { router as postRouter } from "./routes/post/post.js";

const app = express();

const port = 3000;

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting routes
app.use("/posts", upload.none(), postRouter);

app.listen(port, () => {
  console.log(`Server port: ${port}`);
});
