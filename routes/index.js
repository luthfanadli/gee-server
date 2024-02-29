const router = require("express").Router();
const GeeController = require("../controllers/gee");

router.post("/gee", GeeController.postGee);

module.exports = router;
