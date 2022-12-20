const db = [];

module.exports.createUser = (req, res, next) => {
    const {body} = req;
    const user = {...body, id: db.length};
    db.push(user);
    delete user.password;
    res.status(201).send(user);
}

module.exports.getAllUsers = (req, res, next) => {
    res.send(db);
}

module.exports.getOneUser = () => {}

module.exports.updateUser = () => {}

module.exports.deleteUser = () => {}
