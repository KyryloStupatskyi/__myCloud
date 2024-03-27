const { User } = require("../models/models")

class AuthController {
  async register(req, res, next) {
    const { email, password } = req.body

    const candidate = await User.create({ email, password })
  }

  async login() {

  }

  async auth() {

  }
}

module.exports = new AuthController()