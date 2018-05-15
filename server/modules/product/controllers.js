import Product from './model';

let Controllers = {
  save: (text, callback) => {
    console.log('inside')
    Product.create({name: text}, function (err) {
      callback(err);
    });
  },
  getAll: (callback) => {
    Product.find({}, function (err, records) {
      callback(err, records);
    });
  }
};

export default Controllers;
