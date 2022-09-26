const { Contact } = require("../../models/contact");

async function post(req, res) {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
}

module.exports = post;
