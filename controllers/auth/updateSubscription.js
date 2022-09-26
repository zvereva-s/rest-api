const { User } = require("../../models/user");

async function updateSubscription(req, res) {
  const { body } = req;
  const { _id: owner } = req.user;

  const result = await User.findOneAndUpdate({ owner }, body, {
    new: true,
  });
  if (!result) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(result);
}
module.exports = updateSubscription;
