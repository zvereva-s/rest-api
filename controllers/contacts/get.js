const { Contact } = require("../../models/contact");

async function getAll(req, res) {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = null } = req.query;
  const skip = (page - 1) * limit;

  const options = { owner };
  if (favorite !== null) {
    options.favorite = favorite;
  }
  const result = await Contact.find(options, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email _id");
  res.status(200).json(result);
}

module.exports = getAll;
