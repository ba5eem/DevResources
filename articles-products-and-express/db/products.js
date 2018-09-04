//jshint esversion: 6


class Product {
  constructor(){
    this._collection = [{id: "1", name:"Bike", price:"$500", inv:"12"},{id: "2", name:"Helmet", price:"$20", inv:"6"}];
    this._library = [{title: "Ready Player One", body: "What world are you on?", author:"Famous Guy"},{title: "Cuckoos Calling", body: "Murder Mystery", author:"Robert Gilbrant"}];
    this._ids = "0";
    this._index = function(data){
        return this._collection.find( product => {
          return product.id === data;
        });
    };
  }
  addNewToCollection(data){
    //need a validation step here
    data.id = ++this._ids;
    this._collection.push(data);
  }

  showProductById(data){
    return this._index(data);
  }

  deleteById(data){
    let index = this._index;
    let object = this._collection.splice(index,1);
    return object;
  }

  getCollection(){
    return this._collection;
  }

  getLibrary(){
    return this._library;

  }

  updateCollection(data,element){
    data.id = ++this._ids;
    this._collection.splice(this._index,1,data);
  }

  editById(data, element){
    let index = this._index;
    let object = this._collection.splice(index,1,element);
    console.log(data);
    return object;
  }

  createProductForm(data, element){
    console.log(this._index(data,element));
  }



  getProduct(){
    return this._collection;

  }
}//end of class function


module.exports = Product;