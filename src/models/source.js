const db = require('@core/db');
const fs = require('fs');

const insert = async (data) => {
  await db('sources').insert(data).returning('*');
};

const write = async (data) => {
  fs.writeFile(`./src/core/sources/${data.key}.js`, data.source, function(err){
    return (err);
  });
};

module.exports = { insert, write };