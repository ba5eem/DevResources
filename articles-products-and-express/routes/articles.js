//jshint esversion: 6
const express           = require('express');
const app               = express();
const link              = express.Router();
const methodOverride = require('method-override');
const ArticleClass        = require('../db/Articles');
const Article                = new ArticleClass();

///////ADDRESS:HOST/ArticleS//////////
link.route('/')
  .get(( req, res ) => {
    res.render('articles',{articles: Article.getCollection()});
    // res.send(Article.getCollection(req.body));
  });
///////ADDRESS:HOST/ArticleS/NEW/////////
link.route('/new')
   .get(( req, res ) => {
    res.render('newArticle');
    // res.send(Article.getCollection(req.body));
  }) 
  .post(( req,res ) => {//done - and commited / double check
    let data = req.body;
    Article.addNewToCollection(data);
    res.render('articles',{articles: Article.getCollection()});
  });
///////ADDRESS:HOST/ArticleS/:ID/////////
link.route('/:id')
  .get(( req, res ) => {//done and committed / double check
    req.body.id = req.params.id;
    let data = req.body.id;
    res.render('articles', {article: Article.showArticleById(data)});
  });
///////ADDRESS:HOST/ArticleS/:ID/EDIT/////////
link.route('/:id/edit')
  .get(( req, res ) => {//done and committed
    req.body.id = req.params.id;
    let data = req.body.id;
    res.render('edit', {article: Article.showArticleById(data)});
  })
  .post(( req, res ) =>{//done and committed / double check
    let data = req.body;
    Article.updateCollection(data);
    res.render('articles',{articles: Article.getCollection()});
  });
link.route('/:id/edit/delete')
  .get(( req, res ) => {//this actually a delete method
    req.body.id = req.params.id;
    let data = req.body.id;
    let object = Article.deleteById(data);
    res.render('delete',{articles: Article.getCollection()}); 
  });


module.exports = link;