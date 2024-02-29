var express = require('express');
var router = express.Router();
const AnimeController = require("../controllers/AnimeController");
const middleware = require("../middleware/authJWT");

router.get("/", AnimeController.list);
router.get("/:id", AnimeController.getById);
router.post("/create", AnimeController.create);
router.put("/update/:id", AnimeController.update);
router.delete("/delete/:id", AnimeController.delete);

// router.post('/', (req, res, next) => middleware.authorizations(req, res, next) {

module.exports = router;
