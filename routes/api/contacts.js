const express = require("express");
const controllers = require("../../controllers/contacts");
const { asyncWrapper } = require("../../utils");
const { validateBody } = require("../../middleware");
const addTemplate = require("../../templates/contacts");

const router = express.Router();

router.get("/", asyncWrapper(controllers.get));

router.get("/:id", asyncWrapper(controllers.getById));

router.post(
  "/",
  validateBody(addTemplate, "missing required name field"),
  asyncWrapper(controllers.post)
);

router.delete("/:id", asyncWrapper(controllers.removeById));

router.put(
  "/:id",
  validateBody(addTemplate, "missing fields"),
  asyncWrapper(controllers.put)
);

module.exports = router;
