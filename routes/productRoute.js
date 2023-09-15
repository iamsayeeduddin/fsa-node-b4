const express = require("express");
const router = express.Router();
const productCtrl = require("../controller/productCtrl");

router.get("/", productCtrl.getAll);
router.get("/page/:page/size/:size", productCtrl.getAll);
router.post("/create", productCtrl.addProduct);
router.get("/:id", productCtrl.getSingleProduct);
router.put("/update/:id", productCtrl.put);
router.patch("/update/:id", productCtrl.patch);
router.delete("/:id", productCtrl.remove);
module.exports = router;
