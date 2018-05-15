import Product from './model';

let Controllers = {

  save: (product, callback) => {
    Product.create({
      group: product.group,
      code: product.code,
      name: product.name,
      description: product.description,
      url: product.url
    }, function (err, savedProduct) {
      callback(err, savedProduct);
    });
  },

  getAll: (callback) => {
    Product.find({}, function (err, records) {
      callback(err, records);
    }).select({__v: 0});
  },

  delete: (productId, callback) => {
    console.log(productId);
    Product.remove({_id: productId}, function(err) {
      callback(err);
    });
  }
};

export default Controllers;
