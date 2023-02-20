const express = require("express");
const router = express.Router();
const {
  getText,
  setText,
  updateText,
  deleteText,
} = require("../controllers/textController");

router.get("/", getText);
router.post("/", setText);

router.put("/:id", updateText);
router.delete("/:id", deleteText);

module.exports = router;
