'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/sha256Encryption', controller.home.sha256Encryption);
  router.get('/sha256Decryption', controller.home.sha256Decryption);
  router.get('/loadBalance', controller.home.loadBalance);
};
