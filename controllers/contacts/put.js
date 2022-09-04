const contacts = require("../../models/contacts");

async function put(req, res) {
  const { id } = req.params;
  const result = await contacts.updContactById(id, req.body);
  if (!result) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(result);
}

module.exports = put;
