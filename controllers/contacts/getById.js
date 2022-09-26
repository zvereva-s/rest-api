const { Contact } = require("../../models/contact");

async function getById(req, res) {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOne(
    { _id: id, owner },
    "-createdAt -updatedAt"
  );
  if (!result) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.status(200).json(result);
}

module.exports = getById;
