const router = require("express").Router();
const controller = require("../controllers/user");
const authJwt = require("../middleware/auth");

router.get("/", authJwt.verifyToken, controller.getList);

module.exports = router;
