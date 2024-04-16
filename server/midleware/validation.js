const { body } = require("express-validator")

class Validation {
  checkRegistrationRoute() {
    return [
      body("email").isEmail().withMessage("email is not valid"),
      body("password").isLength({ min: 3, max: 12 }).withMessage("password should be > 3 and < 12")
    ]
  }

  checkLoginRoute() {
    return [
      body("email").notEmpty().withMessage("email field can not be empty"),
      body("password").notEmpty().withMessage("password field can not be empty")
    ]
  }
}

module.exports = new Validation()