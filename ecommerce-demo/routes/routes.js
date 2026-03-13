const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const upload = require("../middlewares/upload");

router.get("/", productController.index);

router.get("/product/:id", productController.productDetail);

router.get("/admin", productController.admin);

router.post(
  "/admin/add-product",
  upload.single("image"),
  productController.addProduct
);

router.get("/admin/delete/:id", productController.deleteProduct);

router.get("/admin/edit/:id", productController.editProductPage);

router.post("/admin/edit/:id", productController.updateProduct);

module.exports = router;