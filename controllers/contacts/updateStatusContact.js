const { Contact } = require("../../models/contact");

async function updateStatusContact(req, res) {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(result);
}

module.exports = updateStatusContact;
