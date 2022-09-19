const express = require("express");
const controllers = require("../../controllers/contacts");
const { asyncWrapper } = require("../../utils");
const { validateBody, isValidId } = require("../../middleware");
const { templates } = require("../../models/contact");

const router = express.Router();

router.get("/", asyncWrapper(controllers.get));

router.get("/:id", isValidId, asyncWrapper(controllers.getById));

router.post(
  "/",
  validateBody(templates.addTemplate, "missing required name field"),
  asyncWrapper(controllers.post)
);

router.delete("/:id", isValidId, asyncWrapper(controllers.removeById));

router.put(
  "/:id",
  isValidId,
  validateBody(templates.addTemplate, "missing fields"),
  asyncWrapper(controllers.put)
);
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(templates.favoriteTemplate, "missing field favorite"),
  asyncWrapper(controllers.updateStatusContact)
);
module.exports = router;
