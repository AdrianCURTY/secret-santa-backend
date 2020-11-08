let Engine = require('tingodb')();



module.exports={
     createDb:(folder,opt={})=>{ return new Engine.Db(folder, opt);}
}
