const getDB = require('../util/database').getDB;

class Product  {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
  save(){
      const db = getDB();
      return db
      .collection('products')
        .insertOne(this)
        .then(result =>{
          console.log(result);
        })
        .catch(err =>{
          console.log(err)
        }) ;
  }

  static fetchAll() {
    const db = getDB();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products =>{
        console.log(products);
        return products;
      })
      .catch(err =>{
        console.log(err)
      });
  }
}

module.exports = Product;

