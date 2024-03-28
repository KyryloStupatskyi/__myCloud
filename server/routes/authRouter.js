const Router = require("express")
const authController = require("../controllers/authController")
const validation = require("../midleware/validation")
const router = new Router()

router.post("/registration", validation.checkRegistrationRoute(), authController.registration)
router.get("/login", validation.checkLoginRoute(), authController.login)

module.exports = router