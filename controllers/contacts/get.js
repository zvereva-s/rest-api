const { Contact } = require("../../models/contact");

async function getAll(_, res) {
  const result = await Contact.find();
  res.status(200).json(result);
}

module.exports = getAll;
