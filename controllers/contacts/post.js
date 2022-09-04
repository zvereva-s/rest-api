const contacts = require("../../models/contacts");

async function post(req, res) {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
}

module.exports = post;
