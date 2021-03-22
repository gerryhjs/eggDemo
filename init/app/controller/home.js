'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');
class HomeController extends Controller {

  async PrefixZero(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  }

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
      const str=await this.PrefixZero(i,(max.toString().length));
      const result = crypto.createHash('sha256').update(str.toString()).digest('hex');
      console.log("checking:"+str+"/"+max);
      console.log("target="+key);
      console.log("result="+result);
      if (result===key) {
        console.log("find!");
        ctx.body = str;
        return;
      }
    }
    ctx.body = "unknown";
  }
}

module.exports = HomeController;
