const { Contact } = require("../../models/contact");

async function removeById(req, res) {
  const { id } = req.params;
  await Contact.findByIdAndDelete(id);
  res.status(200).json({ message: "contact deleted" });
}

module.exports = removeById;
