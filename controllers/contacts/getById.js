const { Contact } = require("../../models/contact");

async function getById(req, res) {
  const { id } = req.params;
  const result = await Contact.findById(id);

  if (!result) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.status(200).json(result);
}

module.exports = getById;
