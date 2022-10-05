const { User } = require("../../models/user");
const { requestError, sendMail } = require("../../utils");
const { BASE_URL } = process.env;

async function resendVerifyEmail(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const mail = {
    to: email,
    subject: "Confirm the registration on contacts application",
    html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}" target="_blank">Push to confirm</a>`,
  };
  if (!user) {
    throw requestError(401, "User nod found");
  }
  if (user.verify) {
    throw requestError(400, "Verification has already been passed");
  }

  await sendMail
    .sendMail(mail)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));

  res.status(200).json({ message: "Verification email sent" });
}
module.exports = resendVerifyEmail;
