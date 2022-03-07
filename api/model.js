const db = require('../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
  let query = db('foam');

  if (id) {
    return query
      .where('id', id)
      .first()
  } else {
    return query
  }
}

function update(id, changes) {
  return db('foam')
    .where('id', id)
    .update(changes)
    .then((count) => (count > 0 ? get(id) : null));
}