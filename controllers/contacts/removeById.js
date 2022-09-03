const contacts = require("../../models/contacts");

async function removeById(req, res) {
  const { id } = req.params;
  await contacts.removeContact(id);
  res.status(200).json({ message: "contact deleted" });
}

module.exports = removeById;
