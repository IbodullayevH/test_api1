const { createUser, getAllUsers, login_user, mainPage } = require("../controllers/userController")

const router = require(`express`).Router()

router.post("/user/create", createUser)
router.post("/user/login", login_user)
router.get("/user/all", getAllUsers )
router.get("/", mainPage )

module.exports = router