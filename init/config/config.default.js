/* eslint valid-jsdoc: "off" */

'use strict';
const path=require("path");
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614849912173_6065';

  // add your middleware config here
  config.middleware = ["auth"];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks', // 左边写成.html后缀，会自动渲染.html文件
    },
    // root: [
    //    path.join(appInfo.baseDir, 'app/web'),
    // ]
    // root: workerPath + '/app/view',
  };
  config.static = {
    prefix: '/',
    gzip: true,
    dir: path.join(appInfo.baseDir, '/app/view'),
  };
  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => true,//isInnerIp(ctx.ip),
    },
  };
  config.cors = {
    origin: '*', // 表示允许的源
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' // 表示允许的http请求方式
  };

  return {
    ...config,
    ...userConfig,
  };
};
