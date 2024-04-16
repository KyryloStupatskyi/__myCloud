const Router = require("express")
const authController = require("../controllers/authController")
const validation = require("../midleware/validation")
const auth = require("../midleware/auth")
const router = new Router()

router.post("/registration", validation.checkRegistrationRoute(), authController.registration)
router.post("/login", validation.checkLoginRoute(), authController.login)
router.get("/check", auth, authController.auth)

module.exports = router