var express = require('express');
var app = express();

// variaveis de ambiente .env
require('dotenv').config();

var db = require('@core/db');

// module.exports = 'Thiago Zan';

/*function requireFromString(src, filename) {
  var Module = module.constructor;
  var m = new Module();
  m._compile(src, filename);
  return m.exports;
}*/

// var source = require('@models/source');
// source.save({ key: 'xxx.xxx', type: 1, source: 'xxx' });
//var x = await source.write({ key: 'xxx.xxx', type: 1, source: 'xxx' });
//console.log(x);

app.get('/', async function(req, res){
	//var name = requireFromString('module.exports = "Thiago"');
	//res.send('name');

	//var Module = module.constructor;
	//var m = new Module();
	//m._compile('module.exports = "Thiago Zan";', '@core-sources/xxx.js');
	//var x = m.exports;
	//res.send(x);

	// var x = await require('./src/core/require');

	res.send('x');
});

app.get("/users", async (req, res) => {
  const users = await db("core.users");
  res.json({ users });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});