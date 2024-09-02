const { createUser, getAllUsers, login_user } = require("../controllers/userController")

const router = require(`express`).Router()

router.post("/user/create", createUser)
router.post("/user/login", login_user)
router.get("/user/all", getAllUsers )

module.exports = router