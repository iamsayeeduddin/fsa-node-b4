const express = require("express");
const router = express.Router();
const bookCtrl = require("../controller/bookCtrl");

router.get("/", bookCtrl.get);
router.get("/:id", bookCtrl.getById);
router.delete("/:id", bookCtrl.delete);
router.post("/create", bookCtrl.create);
router.put("/update/:id", bookCtrl.update);
router.patch("/patch/:id", bookCtrl.patch);

module.exports = router;
