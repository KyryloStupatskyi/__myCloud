const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next()
  }

  try {
    const token = req.headers.authorization.split(" ")[1]

    if (!token) {
      return res.status(401).json({ message: "Auth error, try to login1!" })
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY)
    req.user = decoded

    next()
  } catch (error) {
    res.json({ message: "Auth error, try to login!" })
  }
}