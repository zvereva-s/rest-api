async function getCurrent(req, res, next) {
  const { email, subscription } = req.user;
  res.json({
    email,
    subscription,
  });
  next();
}
module.exports = getCurrent;
