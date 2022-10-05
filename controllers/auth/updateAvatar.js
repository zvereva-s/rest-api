const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models/user");
const changeImgSize = require("../../utils/changeImgSize");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

async function updateAvatar(req, res) {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const [extension] = originalname.split(".").reverse();
  const fileName = `${_id}.${extension}`;
  const result = path.join(avatarDir, fileName);

  await fs.rename(tempUpload, result);
  await changeImgSize(result);
  const avatarURL = path.join("avatars", fileName);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
}
module.exports = updateAvatar;
