const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/auth");
const { asyncWrapper } = require("../../utils");
const { validateBody, auth, upload } = require("../../middleware");
const { templates } = require("../../models/user");

router.post(
  "/register",
  validateBody(
    templates.registerTemplate,
    "Помилка від Joi або іншої бібліотеки валідації"
  ),
  asyncWrapper(controllers.reqister)
);

router.post(
  "/login",
  validateBody(
    templates.loginTemplate,
    "Помилка від Joi або іншої бібліотеки валідації"
  ),
  asyncWrapper(controllers.login)
);
router.patch(
  "/",
  auth,
  validateBody(
    templates.subscriptionTemplate,
    'Помилка від Joi або іншої бібліотеки валідації"'
  ),
  asyncWrapper(controllers.updateSubscription)
);
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  asyncWrapper(controllers.updateAvatar)
);

router.get("/current", auth, asyncWrapper(controllers.getCurrent));
router.get("/logout", auth, asyncWrapper(controllers.logout));

module.exports = router;
