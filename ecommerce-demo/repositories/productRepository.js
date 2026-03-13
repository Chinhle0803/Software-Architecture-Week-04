const db = require("../config/database");

exports.getAllProducts = () => {
return new Promise((resolve,reject)=>{

db.all("SELECT * FROM products",(err,rows)=>{
if(err) reject(err);
resolve(rows);
});

});
};

exports.getProductById = (id) => {
return new Promise((resolve,reject)=>{

db.get("SELECT * FROM products WHERE id=?", [id], (err,row)=>{
if(err) reject(err);
resolve(row);
});

});
};

exports.addProduct = (product) => {

return new Promise((resolve,reject)=>{

db.run(
"INSERT INTO products(name,price,description,image) VALUES(?,?,?,?)",
[product.name,product.price,product.description,product.image],
err=>{
if(err) reject(err);
resolve();
}
);

});
};
exports.deleteProduct = (id)=>{
return new Promise((resolve,reject)=>{

db.run(
"DELETE FROM products WHERE id=?",
[id],
err=>{
if(err) reject(err);
resolve();
}
);

});
};

exports.updateProduct = (id, product)=>{
return new Promise((resolve,reject)=>{

db.run(
"UPDATE products SET name=?, price=?, description=?, image=? WHERE id=?",
[product.name, product.price, product.description, product.image, id],
err=>{
if(err) reject(err);
resolve();
}
);

});
};