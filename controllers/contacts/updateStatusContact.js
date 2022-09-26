const { Contact } = require("../../models/contact");

async function updateStatusContact(req, res) {
  const { id } = req.params;
  const { body } = req;
  const { _id: owner } = req.user;

  const result = await Contact.findOneAndUpdate({ _id: id, owner }, body, {
    new: true,
  });
  if (!result) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(result);
}

module.exports = updateStatusContact;
