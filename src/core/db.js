module.exports = require('knex')({
  client: 'pg',
  connection: process.env.DB_CNNSTRING,
  searchPath: ['knex', 'public'],
});