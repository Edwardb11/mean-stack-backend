const { Router } = require("express")
const { createTarea } = require("../controllers/tareaControllers")
const router = new Router()

router.post("/create",createTarea)

module.exports = router