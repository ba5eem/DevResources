//jshint esversion: 6
const express           = require('express');
const app               = express();
const link              = express.Router();
const methodOverride = require('method-override');
const productClass        = require('../db/products');
const Product                = new productClass();

///////ADDRESS:HOST/PRODUCTS//////////
link.route('/')
  .get(( req, res ) => {
    console.log(req.body);
    res.render('products',{products: Product.getCollection()});
    // res.send(Product.getCollection(req.body));
  });
///////ADDRESS:HOST/PRODUCTS/NEW/////////
link.route('/new')
   .get(( req, res ) => {
    res.render('newProduct');
    // res.send(Product.getCollection(req.body));
  })
  .post(( req,res ) => {//done - and commited / double check
    let data = req.body;
    console.log(data.name);
    Product.addNewToCollection(data);
    res.render('products',{products: Product.getCollection()});
  });
///////ADDRESS:HOST/PRODUCTS/:ID/////////
link.route('/:id')
  .get(( req, res ) => {//done and committed / double check
    req.body.id = req.params.id;
    let data = req.body.id;
    let obj = Product.getProduct().filter(e => {
      return e.id === data;
    });
    if(obj.length === 0){
      res.json("Item does not exist");
    }
    else {
      res.render('products', {product: Product.showProductById(data)});
    }
  });
///////ADDRESS:HOST/PRODUCTS/:ID/EDIT/////////
link.route('/:id/edit')
  .get(( req, res ) => {//done and committed
    req.body.id = req.params.id;
    let data = req.body.id;
    res.render('edit', {product: Product.showProductById(data)});
  })
  .post(( req, res ) =>{//done and committed / double check
    let data = req.body;
    Product.updateCollection(data);
    res.render('products',{products: Product.getCollection()});
  });
link.route('/:id/edit/delete')
  .get(( req, res ) => {//this actually a delete method
    req.body.id = req.params.id;
    let data = req.body.id;
    let object = Product.deleteById(data);
    res.render('delete',{products: Product.getCollection()});
  });


module.exports = link;