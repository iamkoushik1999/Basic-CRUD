const Text = require("../models/textModel");

// To show all the texts
const getText = async (req, res) => {
  const texts = await Text.find({ user: req.body.user });
  res.status(200).json(texts);
};

// To set or write text
const setText = async (req, res) => {
  // Find if the User have filled the text field
  if (!req.body.text) {
    res.status(400).json({ Message: "Please add text" });
  }

  // If there is a text written by user
  const text = await Text.create({
    text: req.body.text,
  });
  res.status(200).json(text);
};

// Update the text
const updateText = async (req, res) => {
  // Find if there is a id
  const text = await Text.findById(req.params.id);

  // Find if the user has written any updated text of not
  if (!text) {
    res.status(400).json({ Message: "Text not found" });
  }

  // If the user has written a text... use the (findByIdAndUpdate) methord of mongodb to update
  const updatedtext = await Text.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedtext);
};

// Delete the text
const deleteText = async (req, res) => {
  const text = await Text.findById(req.params.id);

  await text.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getText,
  setText,
  updateText,
  deleteText,
};
