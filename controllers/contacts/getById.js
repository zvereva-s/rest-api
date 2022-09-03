const contacts = require("../../models/contacts");

async function getById(req, res) {
  const { id } = req.params;
  const result = await contacts.getContactById(id);

  if (!result) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.status(200).json(result);
}

module.exports = getById;
