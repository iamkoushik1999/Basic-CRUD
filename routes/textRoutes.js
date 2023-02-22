const express = require("express");
const router = express.Router();
const {
  getText,
  setText,
  updateText,
  deleteText,
} = require("../controllers/textController");

router.get("/", getText).post(setText);
// router.post("/", setText);

router.put("/:id", updateText).delete(deleteText);
// router.delete("/:id", deleteText);

module.exports = router;
