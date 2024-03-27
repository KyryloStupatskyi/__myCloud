const Router = require("express")
const authController = require("../controllers/authController")
const router = new Router()

router.get('/', authController.register)

module.exports = router