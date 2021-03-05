'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('/index.html');
  }

  async sha256Encryption()
  {
    const { ctx } = this;
    const key = ctx.request.query.key;
    const result = crypto.createHash('sha256').update(key).digest('hex');
    ctx.body = result;
  }

  async sha256Decryption()
  {
    const { ctx } = this;
    const key = ctx.request.query.key;
    const max=9999;
    for (let i=0;i<max;i++)
    {
      const result = crypto.createHash('sha256').update(i.toString()).digest('hex');
      console.log("checking:"+i+"/"+max);
      console.log("target="+key);
      console.log("result="+result);
      if (result===key) {
        console.log("find!");
        ctx.body = i;
        return;
      }
    }
    ctx.body = "unknown";
  }
}

module.exports = HomeController;
