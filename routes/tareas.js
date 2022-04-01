const { Router } = require("express");
const { createTarea } = require("../controllers/tareaControllers");
const { readTarea } = require("../controllers/tareaControllers");
const verifyToken = require("../middlewares/verifyToken");

const router = new Router();

router.post("/create", [verifyToken], createTarea);
router.get("/read", [verifyToken], readTarea);

module.exports = router;
