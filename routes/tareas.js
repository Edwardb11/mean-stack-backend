const { Router } = require("express");
const { createTarea,readTarea,updateTarea } = require("../controllers/tareaControllers");
const verifyToken = require("../middlewares/verifyToken");


const router = new Router();

router.post("/create", [verifyToken], createTarea);
router.get("/read", [verifyToken], readTarea);
router.put("/update/:id", [verifyToken], updateTarea);

module.exports = router;
