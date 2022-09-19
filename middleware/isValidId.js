const { isValidObjectId } = require("mongoose");
const { requestError } = require("../utils");

const isValidId = (req, _, next) => {
  if (!isValidObjectId(req.params.id)) {
    next(requestError(404, "Not found"));
  }
  next();
};

module.exports = isValidId;
