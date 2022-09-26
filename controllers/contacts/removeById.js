const { Contact } = require("../../models/contact");

async function removeById(req, res) {
  const { id } = req.params;
  const { _id: owner } = req.user;
  await Contact.findOneAndDelete({ id, owner });
  res.status(200).json({ message: "contact deleted" });
}

module.exports = removeById;
