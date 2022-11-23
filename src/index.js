import express from "express";
import logger from "morgan";

const app = express();

const port = 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
  res.send("testing");
});

app.listen(port, () => {
  console.log(`Server port: ${port}`);
});
