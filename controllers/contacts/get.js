const contacts = require("../../models/contacts");

async function getAll(_, res) {
  const result = await contacts.listContacts();
  res.status(200).json(result);
}

module.exports = getAll;
