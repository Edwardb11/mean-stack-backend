const { Router } = require("express")
const { createTarea } = require("../controllers/tareaControllers")
const verifyToken = require("../middlewares/verifyToken")


const router = new Router()

router.post("/create",[verifyToken],createTarea)

module.exports = router