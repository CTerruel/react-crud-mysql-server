const userData = require('../data/userData')

exports.insert = (user) => {
    return userData.insert(user)
}

exports.select = (id) => {
    return userData.select(id)
}

exports.selectAll = () => {
    return userData.selectAll()
}

exports.update = (id, user) => {
    return userData.update(id, user)
}

exports.delete = (id) => {
    return userData.delete(id)
}