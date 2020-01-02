const db = require('../database/dbConfig.js')

module.exports = {
    getProperties,
    getPropertyById,
    addProperty,
    update,
    remove,
};

function getProperties() {
    return db('properties')
        
}

function getPropertyById(id) {
    const property = db('properties')
        .where({ id })
        .first()

    return property
}

function addProperty(property) {
    return db('properties')
        .insert(property, 'id')
}

function update(id, changes) {
    return db('properties')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('properties')
        .where({ id })
        .del()
}