/**
 * Importing various routes modules
 */
import product from './modules/product';

/**
 * Adding them to apiRouter
 */
let router = (apiRouter) => {
  product(apiRouter);
};

module.exports = router;
