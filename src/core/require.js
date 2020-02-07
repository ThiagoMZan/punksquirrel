module.exports = (async function() {
  var db = require('@core/db');

  const users = await db("core.sources").first();

  var Module = module.constructor;
  var m = new Module();
  m._compile('module.exports = "Thiago Zan";', '@require/');
  
  return m.exports;
})();