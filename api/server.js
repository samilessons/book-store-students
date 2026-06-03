import express from "express";
import cors from "cors";
import bookData from "../data/data.json" with { type: 'json' };

const app = express();
app.use(cors());
app.use(express.json());

app.get("/random-book", (req, res) => {
  res.json(bookData[Math.floor(Math.random() * bookData.length)]);
});

const port = 5555;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});