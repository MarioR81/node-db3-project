const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    update,
    
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db("schemes")
    .where({ id })
    .first();
}

function update(changes, id) {
    return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
        return findById(id);
    })
}