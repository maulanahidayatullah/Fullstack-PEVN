var express = require('express');
var router = express.Router();
const KategoriController = require("../controllers/KategoriController");
const middleware = require("../middleware/authJWT");

router.get("/", KategoriController.list);
router.get("/:id", KategoriController.getById);
router.post("/create", KategoriController.create);
router.put("/update/:id", KategoriController.update);
// router.delete("/delete/:id", (req, res, next) => middleware.auth(req, res, next), KategoriController.delete);

module.exports = router;