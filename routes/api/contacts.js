const express = require("express");
const controllers = require("../../controllers/contacts");
const { asyncWrapper } = require("../../utils");
const { validateBody, isValidId, auth } = require("../../middleware");
const { templates } = require("../../models/contact");

const router = express.Router();

router.get("/", auth, asyncWrapper(controllers.get));
router.get("/:id", auth, isValidId, asyncWrapper(controllers.getById));

router.post(
  "/",
  auth,
  validateBody(templates.addTemplate, "missing required name field"),
  asyncWrapper(controllers.post)
);

router.delete("/:id", auth, isValidId, asyncWrapper(controllers.removeById));

router.put(
  "/:id",
  isValidId,
  auth,
  validateBody(templates.addTemplate, "missing fields"),
  asyncWrapper(controllers.put)
);
router.patch(
  "/:id/favorite",
  auth,
  isValidId,
  validateBody(templates.favoriteTemplate, "missing field favorite"),
  asyncWrapper(controllers.updateStatusContact)
);
module.exports = router;
