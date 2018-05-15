/**
 * Importing various routes modules
 */
import test from './modules/product';

/**
 * Adding them to apiRouter
 */
let router = (apiRouter) => {
  test(apiRouter);
};

module.exports = router;
