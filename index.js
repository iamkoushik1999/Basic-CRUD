const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}!`);
});
