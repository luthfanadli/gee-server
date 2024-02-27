const router = require("express").Router();
const GeeController = require("../controllers/gee");

router.get("/gee", GeeController.getGee);

module.exports = router;
