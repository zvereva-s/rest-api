const { requestError } = require("../utils");

function validateBody(template, message) {
  function func(req, _, next) {
    const { error } = template.validate(req.body);
    if (error) {
      error.message = message;
      next(requestError(400, error.message));
    }
    next();
  }
  return func;
}

module.exports = validateBody;
