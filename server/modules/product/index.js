import ProductController from './controllers';
import responder from '../core/middlewares/responder';

let product = {
  getAll: (req, res) => {
    ProductController.getAll( (err, data) => {
      responder(req, res, err, data);
    });
  },
  create: (req, res) => {
    console.log('inside first')
    ProductController.save( 'Mohith', (err) => {
      if (err) {
        err.msg = 'Username already exists';
        responder(req, res, err);
      } else {
        let data = 'Success';
        responder(req, res, err, data);
      }
    });
  }
};

/**
 * Implement router for particular module
 */
let router = (apiRouter) => {
  apiRouter.get('/getProducts', product.getAll);
  apiRouter.get('/createProduct', product.create);
};

export default router;
