const productRepo = require("../repositories/productRepository");

exports.getProducts = async () => {

return await productRepo.getAllProducts();

};

exports.getProductDetail = async (id) => {

return await productRepo.getProductById(id);

};

exports.createProduct = async (product) => {

if(!product.name) {
throw new Error("Product name required");
}

return await productRepo.addProduct(product);

};

exports.deleteProduct = async (id)=>{
return await productRepo.deleteProduct(id);
};

exports.updateProduct = async (id, product)=>{
if(!product.name) {
throw new Error("Product name required");
}
return await productRepo.updateProduct(id, product);
};