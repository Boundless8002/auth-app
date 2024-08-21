import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json("welcome to coding world");
});
app.listen(port, () => {
  console.log(`connected to ${port}`);
});
