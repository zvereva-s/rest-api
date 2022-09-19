const { Contact } = require("../../models/contact");

async function post(req, res) {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
}

module.exports = post;
