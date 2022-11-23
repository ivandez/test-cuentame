import express from "express";
import logger from "morgan";
import sequelize from "./db/dbConnection.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const upload = multer({ dest: path.join(__dirname, "../public/images/") });

// Routers
import { router as postRouter } from "./routes/post/post.js";
import { router as commentRouter } from "./routes/comment/comment.js";

const app = express();

const port = 3000;

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting routes
app.use("/posts", upload.single("img"), postRouter);
app.use("/comments", upload.none(), commentRouter);

app.listen(port, () => {
  console.log(`Server port: ${port}`);
});
