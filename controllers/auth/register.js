const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { User } = require("../../models/user");
const { requestError } = require("../../utils");

async function register(req, res) {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw requestError(409, "Email in use");
  }

  // const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
  });
  res
    .status(201)
    .json({
      user: {
        email: result.email,
        subscription: result.subscription,
        avatarURL,
      },
    });
}

module.exports = register;
