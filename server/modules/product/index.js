import ProductController from './controllers';
import responder from '../core/middlewares/responder';

let product = {
  getAll: (req, res) => {
    ProductController.getAll((err, data) => {
      responder(req, res, err, data);
    });
  },

  create: (req, res) => {
    const payload = req.body;
    ProductController.save(payload, (err, response) => {
      if (err) {
        err.msg = 'Unable to add product';
        responder(req, res, err);
      } else {
        responder(req, res, err, response);
      }
    });
  },

  delete: (req, res) => {
    const payload = req.params.id;
    ProductController.delete(payload, (err, response) => {
        responder(req, res, err, response);
    });
  }
};

/**
 * Implement router for particular module
 */
let router = (apiRouter) => {
  apiRouter.get('/getProducts', product.getAll);
  apiRouter.post('/createProduct', product.create);
  apiRouter.delete('/deleteProduct/:id', product.delete);
};

export default router;
