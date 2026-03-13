const productService = require("../services/productService");

exports.index = async (req,res)=>{
  const products = await productService.getProducts();
  res.render("index",{products});
};

exports.productDetail = async (req,res)=>{
  const product = await productService.getProductDetail(req.params.id);
  res.render("product",{product});
};

exports.admin = async (req,res)=>{
  const products = await productService.getProducts();
  res.render("admin",{products});
};

exports.addProduct = async (req,res)=>{
  const product = {
    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    image:req.file ? "/uploads/"+req.file.filename : ""
  };

  await productService.createProduct(product);
  res.redirect("/admin");
};

exports.deleteProduct = async (req,res)=>{
  await productService.deleteProduct(req.params.id);
  res.redirect("/admin");
};

exports.editProductPage = async (req,res)=>{
  const product = await productService.getProductDetail(req.params.id);
  res.render("edit",{product});
};

exports.updateProduct = async (req,res)=>{
  const product = {
    id: req.params.id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.file ? "/uploads/"+req.file.filename : req.body.image
  };
  
  await productService.updateProduct(req.params.id, product);
  res.redirect("/admin");
};