//jshint esversion: 6


class Article {
  constructor(){
    this._library = [{id: "1",title: "Ready Player One", body: "What world are you on?", author:"Famous Guy"},{id: '2',title: "Cuckoos Calling", body: "Murder Mystery", author:"Robert Gilbrant"}];
    this._ids = "0";
    this._index = function(data){
        return this._library.find( Article => {
          return Article.id === data;
        });
    };
  }
  addNewToCollection(data){
    //need a validation step here
    data.id = ++this._ids;
    this._library.push(data);
  }

  showArticleById(data){
    return this._index(data);
  }
  deleteById(data){
    let index = this._index;
    let object = this._library.splice(index,1);
    return object;
  }

  getCollection(){
    return this._library;
  }

  getLibrary(){
    return this._library;

  }

  updateCollection(data,element){
    data.id = ++this._ids;
    this._library.splice(this._index,1,data);
  }

  editById(data, element){
    let index = this._index;
    let object = this._library.splice(index,1,element);
    console.log(data);
    return object;
  }

  createArticleForm(data, element){
    console.log(this._index(data,element));
  }



  getArticle(){
    
  }
}//end of class function


module.exports = Article;