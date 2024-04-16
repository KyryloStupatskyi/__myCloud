const { User } = require("../models/models")
const bcrypt = require("bcrypt")
const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")

class AuthController {
  async registration(req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Uncorected request: " + errors.errors[0].msg });
    }

    const { email, password } = req.body

    const candidate = await User.findOne({ where: { email } })

    if (candidate) {
      return res.status(409).json({ message: "User with same login already exist" })
    }

    const salt = bcrypt.genSaltSync(5)

    if (!salt) {
      console.log("Error generation salt")
      return res.status(500).json({ message: "Internal server error" })
    }

    const hashPassword = bcrypt.hashSync(password, salt)

    if (!hashPassword) {
      console.log("Error hashing password")
      return res.status(500).json({ message: "Internal server error" })
    }

    const user = await User.create({ email, password: hashPassword })

    const token = jwt.sign({ id: user.id, email: user.email, diskSpace: user.diskSpace, usedSpace: user.usedSpace }, process.env.JWT_KEY, { expiresIn: '24h' })

    return res.json({ token })
  }

  async login(req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json({ message: "Uncorected request: " + errors.errors[0].msg });
    }

    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(404).json({ message: "User with such login was not found" })
    }

    const comparePassword = bcrypt.compareSync(password, user.password)

    if (!comparePassword) {
      return res.status(401).json({ message: "Invalid password" })
    }

    const token = jwt.sign({ id: user.id, email: user.email, diskSpace: user.diskSpace, usedSpace: user.usedSpace }, process.env.JWT_KEY, { expiresIn: '24h' })

    return res.json({ token })
  }

  async auth(req, res) {
    const token = jwt.sign({ id: req.user.id, email: req.user.email, diskSpace: req.user.diskSpace, usedSpace: req.user.usedSpace }, process.env.JWT_KEY, { expiresIn: '24h' })
    return res.json({ token })
  }
}

module.exports = new AuthController()