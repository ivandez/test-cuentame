import express from "express";
import logger from "morgan";
import sequelize from "./db/dbConnection.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Set files support
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    console.log(file);
    cb(null, `${unique}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routers
import { router as postRouter } from "./routes/post/post.js";
import { router as commentRouter } from "./routes/comment/comment.js";

const app = express();

const port = 3000;

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Setting routes
app.use("/posts", upload.single("img"), postRouter);
app.use("/comments", upload.none(), commentRouter);

app.listen(port, () => {
  console.log(`Server port: ${port}`);
});
